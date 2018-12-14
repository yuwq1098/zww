
// 数组去重
{
    // 选择排序法
    let selectionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        // let i = 0
        // while(i < len){
        //     let ref_num = array[i]
        //     let j = i + 1
        //     while(j < len){
        //         let tag_num = array[j]
        //         count++
        //         if (tag_num < ref_num ) {
        //             let [a, b] = [array[i], array[j]]
        //             array[i] = b
        //             array[j] = a
        //             break;
        //         }
        //         j++
        //     }
        //     i++
        // }
        for (let i = 0; i < len; i++) {
            let ref_num = array[i]
            for (let j = i + 1; j < len; j++) {
                let tag_num = array[j]
                count++
                if (tag_num < ref_num ) {
                    let [a, b] = [array[i], array[j]]
                    array[i] = b
                    array[j] = a
                    // 使用i-- 是可能 方法里将比自己小的值 对换位置， 但是没有找到最小的那个值 ， 那就要再走一波
                    i--
                    break;
                }
            }
        }
        console.info({
            '元素组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }
    // 数组唯一化
    let Unique = (array) => {
        return Array.from(new Set(array))
    }
    let arr = new Array(1,3,2,5,7,8,9,1,2,23,15,88,12)
    // selectionSort(Unique(arr))
    // selectionSort(['A', 'D', 'E', 'B', 'F', 'C'])
}

// 按成绩排序， 成绩相同时，按名字排序
{
    class Student {
        constructor(info){
            let [a, b] = info
            this.name = a
            this.score = b
        }
    }
    // 选择排序法
    let selectionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        for (let i = 0; i < len; i++) {
            let ref_obj = array[i]
            for (let j = i + 1; j < len; j++) {
                let tag_obj = array[j]
                count++
                // if (tag_obj.score < ref_obj.score || (tag_obj.score == ref_obj.score && tag_obj.name < ref_obj.name) ) {
                if (tag_obj.score > ref_obj.score || (tag_obj.score == ref_obj.score && tag_obj.name < ref_obj.name) ) {
                    let [a, b] = [array[i], array[j]]
                    array[i] = b
                    array[j] = a
                    // 使用i-- 是可能 方法里将比自己小的值 对换位置， 但是没有找到最小的那个值 ， 那就要再走一波
                    i--
                    break;
                }
            }
        }
        console.info({
            '元素组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }
    // 数据格式化， 使用Student 构造类处理
    let dataFormatting = (data) => {
        let list = new Set()
        for(let item of data) {
            list.add(new Student(item))
        }
        return Array.from(list)
    }
    let arr = [['D', 85], ['A', 70], ['B', 60], ['T', 90], ['元', 75], ['X', 85]]
    // selectionSort(dataFormatting(arr))
}

{
    class Student {
        constructor(info){
            let [a, b] = info
            this.name = a
            this.score = b
        }
    }
    // 选择排序法
    let selectionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        for (let i = 0; i < len; i++) {
            let ref_obj = array[i]
            for (let j = i + 1; j < len; j++) {
                let tag_obj = array[j]
                count++
                // if (tag_obj.score < ref_obj.score || (tag_obj.score == ref_obj.score && tag_obj.name < ref_obj.name) ) {
                if (tag_obj.score > ref_obj.score || (tag_obj.score == ref_obj.score && tag_obj.name < ref_obj.name) ) {
                    let [a, b] = [array[i], array[j]]
                    array[i] = b
                    array[j] = a
                    // 使用i-- 是可能 方法里将比自己小的值 对换位置， 但是没有找到最小的那个值 ， 那就要再走一波
                    i--
                    break;
                }
            }
        }
        console.info({
            '原数组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }
    // 数据格式化， 使用Student 构造类处理
    let dataFormatting = (data) => {
        let list = new Set()
        for(let item of data) {
            list.add(new Student(item))
        }
        return Array.from(list)
    }
    let Helpers = window.Helpers
    // let arr = Helpers.randomArray(500)
    // // 性能测试 - 选择排序法
    // Helpers.perfTest('选择排序法', selectionSort, dataFormatting(arr))
}

class Student {
    constructor(info){
        let [a, b] = info
        this.name = a
        this.score = b
    }
}
// 数据格式化， 使用Student 构造类处理
let dataFormatting = (data) => {
    let list = new Set()
    for(let item of data) {
        list.add(new Student(item))
    }
    return Array.from(list)
}
let Helpers = window.Helpers
// 插入排序法
{
    // 插入排序法
    let insertionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        for (let i = 1; i < len; i++) {
            // 寻找array插入的合适的位置
            for (let j = i; j > 0; j--) {
                count++
                // 向前查找 j-1 最小值是0， 所以j最小要为1
                if (array[j].score > array[j-1].score || (array[j].score == array[j-1].score && array[j].name < array[j-1].name)) {
                    let [a, b] = [array[j], array[j-1]]
                    array[j] = b
                    array[j-1] = a
                } else {
                    // 如果已经是放在最合适的位置上了
                    break;
                }
            }
        }
        console.info({
            '原数组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }
    // let arr = Helpers.randomArray(1500)
    // // 性能测试 - 插入排序法
    // Helpers.perfTest('插入排序法', insertionSort, dataFormatting(arr))

    // 插入排序可能会比选择排序快一些， 原因是因为， 插入排序可以有机会提前break, 并且已经排序过的数据不用担心 位置错误
}

// 插入排序优化
{
    // 插入排序法
    let insertionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        for (let i = 1; i < len; i++) {
            let temp = array[i]
            // 寻找array插入的合适的位置
            let j;
            for (j = i; j > 0; j--) {
                count++
                // 向前查找 j-1 和 j 比对， 如果j-1> j, 那么前面的往后挪， j = j -1  j-1 = j , 等于把不正确的 j-n干掉了， 最后j的索引值变成 j-n, 直接把需要插入的值插入到那个位置
                if (array[j-1].score < temp.score || (array[j-1].score == temp.score && array[j-1].name > temp.name)) {
                    array[j] = array[j-1]
                } else {
                    // 已经将不合理的值的位置都依次往后挪了
                    break;
                }
            }
            // 放在最合适的位置上
            array[j] = temp
        }
        console.info({
            '原数组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }
    // let arr = Helpers.randomArray(1500)
    // // 性能测试 - 插入排序法
    // Helpers.perfTest('插入排序法(优化)', insertionSort, dataFormatting(arr))

    // 优化的核心思想是减少 赋值操作（值的调换）， 单次比对中， 目标值只进行一次赋值， 然后参考值依次向后挪（赋值）， 数据量大的话， 优化性能40%左右
}

{
    // 插入排序法
    let insertionSort = (array) => {
        let len = array.length
        let origin = [].concat(array)
        let count = 0
        for (let i = 1; i < len; i++) {
            let temp = array[i]
            // 寻找array插入的合适的位置
            let j;
            for (j = i; j > 0; j--) {
                count++
                // 向前查找 j-1 和 j 比对， 如果j-1> j, 那么前面的往后挪， j = j -1  j-1 = j , 等于把不正确的 j-n干掉了， 最后j的索引值变成 j-n, 直接把需要插入的值插入到那个位置
                if (array[j-1] > temp) {
                    array[j] = array[j-1]
                } else {
                    // 已经将不合理的值的位置都依次往后挪了
                    break;
                }
            }
            // 放在最合适的位置上
            array[j] = temp
        }
        console.info({
            '原数组': origin,
            '数组': array,
            '比对次数': count
        })
        return array
    }

    let arr1 = Helpers.generateNearlyOrderedArray(50000, 300)
    let arr2 = Helpers.generateRandomOrderedArray(50000)
    console.info({arr1, arr2})
    // 性能测试 - 近乎有序和无序的比较
    Helpers.perfTest('插入排序法(近乎有序)', insertionSort, arr1)
    Helpers.perfTest('插入排序法(无序)', insertionSort, arr2)

    // 插入排序对近乎有序的 数据排序， 可以非常快，比对次数很少
}