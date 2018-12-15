
{
    //覆盖默认库中timeout的默认值
    axios.defaults.timeout = 15000;

    // 辅助函数库
    const Helpers = window.Helpers

    // 非小号数据
    const fxh_api_url = '/api/coin/coinrank'

    // 我关注的虚拟货币
    const my_focus_coins = new Set();
    
    // 通过add方法向Set结构中加入成员
    ['BTC','ETH','LTC','ETC','HT','OMG','ITC','BTM','RUFF','MIOTA','STEEM','QTUM'].map(s => my_focus_coins.add(s))
    
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
    
    // 获取虚拟币当前价格
    let generateCoinList = () => {
        getAllCoinList().then(res=>{
            let data = res
            let needed = new Set()
            let target_coins = new Set(my_focus_coins)
            for (let item of data ) {
                let ref_coin = item
                for (let c_item of target_coins) {
                    if (ref_coin.name == c_item) {
                        needed.add(ref_coin)
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
        })
    }
    generateCoinList()
}