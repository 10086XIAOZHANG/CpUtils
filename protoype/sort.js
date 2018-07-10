/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能: 排序
 */
/**
 * 交换两个数的位置
 * @param arr 数据
 * @param a 下标a
 * @param b 下标b
 * @private
 */
function _swap(arr,a,b){
    var temp =arr[a];
    arr[a] =arr[b];
    arr[b]=temp;
}
function _partition(arr,l,r){
    var v=arr[l];
    var index=l,j;
    for(j=l+1;j<=r;j++){
        if(arr[j]<v){
            _swap(arr,index+1,j);
            index++;
        }
    }
    _swap(arr,l,index);
    return index;
}

/**
 * 快速排序内部函数
 * @param arr
 * @param l
 * @param r
 * @private
 */
function _quickSort(arr,l,r){
    if(l<r){
        var piIndex= _partition(arr,l,r);
        _quickSort(arr,l,piIndex-1);
        _quickSort(arr,piIndex+1,r);
    }
}

/**
 * 选择排序内部算法
 * @param arr
 * @param length
 * @private
 */
function _selectionSort(arr,length){
    var i;
    for(i=0;i<length-1;i++){
        var index=i;
        var j;
        for(j=index+1;j<length;j++){
            if(arr[j]<=arr[index]) {
                index=j;
            }
        }
        if(index!==i){
            _swap(arr,index,i);
        }
    }
}

/**
 * 内部函数shell排序
 * @param arr
 * @param length
 * @private
 */
function _shellSort(arr,length) {
    var space;
    for(space=length/2;space>0;space=(parseInt(space/2))){ //space=5
        for (var i = space; i < arr.length; i += space) // 5
        {
            var index=i;
            var target = arr[i]
            while(index>0 && arr[index-space]>target){
                _swap(arr,index-space,index)
                index-=space;
            }
            arr[index]=target;
        }
    }
}
/**
 * 插入排序
 * @param arr
 * @param length
 * @private
 */
function _insertSort(arr,length){
    var i;
    for(i=1;i<length;i++){
        var index=i;
        var target = arr[i]
        while(index>0 && arr[index-1]>target){
            _swap(arr,index-1,index)
            index--;
        }
        arr[index]=target;
    }
}
/**
 * 排序工具类
 * @param arr 数组
 * @constructor
 */
function SortUtils(arr){
    this.array=arr;
    this.length=arr.length
}
SortUtils.prototype.quickSort=function () {
    _quickSort(this.array,0,this.length-1)
    return this.array;
}
SortUtils.prototype.selectionSort=function(){
    _selectionSort(this.array,this.length)
    return this.array;
}
SortUtils.prototype.insertSort =function() {
    _insertSort(this.array,this.length)
    return this.array;
}
SortUtils.prototype.shellSort =function () {
    _shellSort(this.array,this.length);
    return this.array;
}