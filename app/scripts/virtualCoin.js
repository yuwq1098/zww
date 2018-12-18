
{
    //覆盖默认库中timeout的默认值
    axios.defaults.timeout = 15000;

    // 辅助函数库
    const Helpers = window.Helpers

    // 非小号数据
    const fxh_api_url = '/api/coin/coinrank'
    
    // 我关注的虚拟货币
    const my_focus_coins = new Set();

    // 我投资的钱
    const my_putin = 3000 + 4000 + 1500 + 2000 + 2500 + 1200;

    
    // 通过add方法向Set结构中加入成员
    [
        {name: 'BTC', hold_count: 0.0103, target_count: 0.2},
        {name: 'ETH', hold_count: 1.0813, target_count: 3.5},
        {name: 'LTC', hold_count: 6.3103, target_count: 12.5},
        {name: 'ETC', hold_count: 4.0285, target_count: 55},
        {name: 'ITC', hold_count: 2501.1910, target_count: 2500},
        {name: 'HT', hold_count: 0.1785, target_count: 180},
        {name: 'QTUM', hold_count: 45.2864, target_count: 160},
        {name: 'RUFF', hold_count: 11048.0624, target_count: 25000},
        {name: 'BTM', hold_count: 1000.4182, target_count: 3750},
        {name: 'MIOTA', hold_count: 558.8800, target_count: 600},
        {name: 'OMG', hold_count: 108.6239, target_count: 160},
        {name: 'STEEM', hold_count: 66.4368, target_count: 540},
        {name: 'CTXC', hold_count: 0, target_count: 1280}
    ].map(s => {
        s.target_count = s.target_count * 1 
        return my_focus_coins.add(s)
    })
    
    console.log(my_focus_coins)

    // 获取排行榜比较记录
    let getCoinRankingList = (url) => {
        // 获取前两百名的虚拟币数据
        return axios.get(url)
            .then(res=>{
                return res.data.data
            })
            .catch(error=>{
                console.log(error)
            });
    }
    // 需要500条数据
    const need_data_count = 400
    const max_requests = 100
    let requests_url = new Set()
    for (let i = 0; i < Math.ceil(need_data_count/max_requests); i++){
        let url = `${fxh_api_url}?page=${i+1}&type=0&pagesize=${max_requests}&webp=1`
        requests_url.add(getCoinRankingList(url))
    }

    // 获取所需要的全部数据信息
    let getAllCoinList = () => {
        return new Promise(resolve=>{
            // 使用promise.all获取 n条数据
            axios.all(Array.from(requests_url)).then(res=>{
                resolve(Helpers.concatArr(res))
            }).catch(error=>{
                console.log(error)
            })
        })
    }

    // 生成表格信息
    let generateTableInfoDom = (data) => {
        let $infoTable = $('#infoTable')
        let part1_content = $infoTable.find('.part-01 .table-content');
        let part2_content = $infoTable.find('.part-02 .table-content');
        let part3_content = $infoTable.find('.part-03 .table-content');
        let part4_content = $infoTable.find('.part-04 .table-content');
        let part5_content = $infoTable.find('.part-05 .table-content');
        let part1_label_dom = ``
        let part1_value_dom = ``
        let part2_target_num_dom = ``
        let part3_target_price_dom = ``
        let part4_hold_num_dom = ``
        let part5_hold_price_dom = ``
        let target_price_total = 0
        let hold_price_total = 0
        let BTC_price = 0
        for (let item of data){
            if (item.name == 'BTC') BTC_price = Number((item.current_price).toFixed(3))
            let target_price = (item.target_count * item.current_price).toFixed(2)
            let hold_price = (item.hold_count * item.current_price).toFixed(2)
            target_price_total += Number(target_price)
            hold_price_total += Number(hold_price)
            part1_label_dom += `<li>${item.name}</li>`
            part1_value_dom += `<li>${(item.current_price).toFixed(3)}</li>`
            part2_target_num_dom += `<li>${item.target_count}个</li>`
            part3_target_price_dom += `<li>${target_price}元</li>`
            part4_hold_num_dom += `<li>${item.hold_count}个</li>`
            part5_hold_price_dom += `<li>${hold_price}元</li>`
        }
        part1_content.append(`<ul class="lab-list">${part1_label_dom}</ul>`)
        part1_content.append(`<ul class="val-list">${part1_value_dom}</ul>`)
        part2_content.append(`<ul class="val-list">${part2_target_num_dom}</ul>`)
        part3_content.append(`<ul class="val-list">${part3_target_price_dom}</ul>`)
        target_price_total = Number((target_price_total).toFixed(3))
        part3_content.append(`<span class="total-price">目标总价：${target_price_total}元</span>`)
        part3_content.append(`<span class="total-price">目标比特基币：${(10000 * target_price_total / BTC_price).toFixed(2)}币</span>`)
        part4_content.append(`<ul class="val-list">${part4_hold_num_dom}</ul>`)
        part5_content.append(`<ul class="val-list">${part5_hold_price_dom}</ul>`)
        hold_price_total = Number((hold_price_total).toFixed(3))
        part5_content.append(`<span class="total-price">持有币总值：${hold_price_total}元</span>`)
        part5_content.append(`<span class="total-price">距离目标还需：${(target_price_total - hold_price_total).toFixed(3)}元</span>`)
        part5_content.append(`<span class="total-price">已投资金额：${(my_putin).toFixed(3)}元</span>`)
        let base_coin = +(hold_price_total / BTC_price) * 10000
        part5_content.append(`<span class="total-price">我的比特基币：${(base_coin).toFixed(2)}币</span>`)
    }
    
    // 获取虚拟币当前价格
    let generateCoinList = () => {
        getAllCoinList().then(res=>{
            let data = res
            let needed = new Set()
            let target_coins = new Set(my_focus_coins)
            for (let item of data ) {
                let ref_coin = item
                for (let c_item of target_coins) {
                    if (ref_coin.name == c_item.name) {
                        let obj = Object.assign(c_item, ref_coin)
                        needed.add(obj)
                        target_coins.delete(c_item)
                        break
                    }
                }
                // 避免无用的循环， 浪费性能
                if (target_coins.size<=0){
                    break
                }
            }
            console.log(needed)
            generateTableInfoDom(needed)
        })
    }
    generateCoinList()
}