
// index.html主页样式
$(function(){
    let a = 5
    console.log(a)
    let m = new Map()
    m.set('name', 'yuwq4')
    console.log('有毒')
    m.set('desc', '年轻的小伙子')
    $("body").append(m.get('name'));

    let aa = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('有意思')
            }, 2000)
        })
    }

    aa().then((rev)=>{
        console.log(rev)
    })
})

