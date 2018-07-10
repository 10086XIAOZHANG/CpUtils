/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能: Array Util
 */
/**
 * 内部函数-数组扁平化
 * @param array
 * @return {Array}
 * @private
 */
function _flattenArray(array) {
    var result=[];
    for (var i = 0, len = array.length; i < len; i++) {
        if(Array.isArray(array[i])){
            result=result.concat(_flattenArray(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
}

/**
 * reduces方式实现数组扁平化
 * @param arr
 * @return {*}
 * @private
 */
function _reduceFlattenArray(arr){
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? _reduceFlattenArray(next) : next)
    }, [])
}
var CpArray=function (arr) {
    this.array=arr;
}

/**
 * 返回数组满足条件的第一个数的下标
 * @param arr
 * @param predicate
 * @param context
 * @return {Array}
 * @private
 */
function _findIndex(arr,predicate,context){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(predicate.call(context,arr[i],i,arr)){
            return i;
        }
    }
    return -1;
}

/**
 * 根据dir实现正序和倒序遍历
 * @param dir 1：正序 ；-1:倒序
 * @param arr
 * @param predicate 条件处理函数
 * @param context 执行上下文
 * @return {*}
 * @private
 */
function _createIndexFinder(dir,arr,predicate,context) {
    var newArr=[],index;
    if(dir>0){
        index=0;
    }else{
        index=arr.length-1
    }
    for(;index>=0&&index<arr.length;index+=dir){
        if(predicate.call(context,arr[index],index,arr)){
            return index;
        }
    }
    return -1;
}
/**
 * 去重
 * @return {Array}
 */
CpArray.prototype.baseUnique=function () {
    var i,j,newArr=[];
    newArr.push(this.array[0]);
    for(i=1;i<this.array.length;i++){
        for(j=0;j<newArr.length;j++){
            if(newArr[j]===this.array[i]){
                break;
            }
        }
        if(j===newArr.length)
            newArr.push(this.array[i]);
    }
    return newArr;
}
/**
 * 通过indexOf
 * @return {Array}
 */
CpArray.prototype.indexOfUnique=function () {
    var i,j,newArr=[];
    newArr.push(this.array[0]);
    for(i=1;i<this.array.length;i++){
        if(newArr.indexOf(this.array[i])===-1){
            newArr.push(this.array[i]);
        }
    }
    return newArr;
}
/**
 * 排序后去重
 * @return {Array}
 */
CpArray.prototype.sortAfterUnique=function () {
    var i,j,temp=0;newArr=[];sortArr=this.array.concat().sort();
    for(i=1;i<sortArr.length;i++){
        if(!i||sortArr[i]!==temp){
            newArr.push(sortArr[i]);
            temp=sortArr[i];
        }
    }
    return newArr;
}
/**
 * 通过Object
 * @return {Array}
 */
CpArray.prototype.byObjectUnique=function () {
    var i,obj={},newArr=[];
   return this.array.filter(function (item,index) {
       return obj.hasOwnProperty(typeof item +'_'+item)?false:obj[typeof item +'_'+item]=true;
   })
}
/**
 * 数据扁平化处理
 * @return {*}
 */
CpArray.prototype.flattenArray=function () {
    if(!this.array instanceof Array){
        return [];
    }
   // return _flattenArray(this.array)
    return _reduceFlattenArray(this.array)
}
/**
 * 返回满足条件的元素下标
 * @return {*}
 */
CpArray.prototype.findIndex=function () {
    if(!this.array instanceof Array){
        return [];
    }
    return _createIndexFinder(-1,this.array,function (item,index,arr) {
        return item>15;
    },this);
}