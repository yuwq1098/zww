// index.html主页样式
$(function(){

    // 加载logo
    let load_logo = (url) => {
        return new Promise((resolve,reject) => {
            let img = new Image()
            img.src = url
            img.onload = () => {
                resolve(true)
            }
            img.onerror = function () {
                reject(new Error('Could not load image at ' + url));
            }
        })
    }
    let load_logo_count = 0
    load_logo('../imgs/zww_logo_030.png').then(res => {
        $('.m-logo').append(res)
    }).catch(err => {
        if (load_logo_count < 3) {
            console.log('第几次'+ load_logo_count)
            load_logo('../imgs/zww_logo_030.png')
        }
        console.error(err)
        load_logo_count++
    })

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
    
    // 左侧栏点击事件
    $('.m-left-menu .lm-item').on('click', function () {
        let scope = $(this)
        // let index = scope.index('.m-left-menu .lm-item')
        scope.addClass('active').siblings('.lm-item').removeClass('active')
    })

    // 其他主页链接
    let load_footnote = () => {
        let notes = [
            {
                tit: 'github',
                link: 'https://github.com/yuwq1098'
            },
            {
                tit: 'CSDN博客',
                link: 'https://blog.csdn.net/yuwq123'
            }
        ]
        let dom = ''
        notes.forEach((item)=>{
            dom += `<a href="${item.link}" class="u-link" target="_blank">${item.tit}</a>`
        })
        dom += `<span class="u-producer">Made by yu wenqiang.</a>`
        $('.m-foot-note').append(dom)
    }
    load_footnote()

})

