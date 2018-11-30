
// index.html主页样式
$(function(){
    // let a = 5
    // console.log(a)
    // let m = new Map()
    // m.set('name', 'yuwq4')
    // console.log('有毒')
    // m.set('desc', '年轻的小伙子')
    // // $("body").append(m.get('name'));

    // let aa = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve('有意思')
    //         }, 2000)
    //     })
    // }

    // aa().then((rev)=>{
    //     console.log(rev)
    // })

    // 加载logo
    let load_logo = () => {
        let img = new Image()
        img.src = "../imgs/zww_logo_03.png"
        $('.m-logo').append(img)
    }
    load_logo()

    // 加载左侧导航栏
    let load_leftmenu = () => {
        let list = new Set()
        list.add({
            lab_name: '首页'
        })
        list.add({
            lab_name: '关于'
        })
        list.add({
            lab_name: '作品'
        })
        list.add({
            lab_name: '爱好'
        })
        list.add({
            lab_name: '联系'
        })
        let dom = ''
        let i = 0
        for (let item of list) {
            dom += `<li class="lm-item${i==0?' active':''}"><a href="javascript:;" class="u-link">${item.lab_name}</a></li>`
            i++
        }
        dom = `<ul class="lm-list">${dom}</ul>`
        $('.m-left-menu').append(dom)
    }
    load_leftmenu()
})

