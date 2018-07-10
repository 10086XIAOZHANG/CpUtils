/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
function _binarySearch(arr,start,end, value){
    var startIndex=start;
    var endIndex=end;
    if(start>end){
        return 0;
    }
    var middle=parseInt((endIndex+startIndex)/2);
    if(arr[middle]===value){
        return middle;
    }else if(arr[middle]>value){
        endIndex=middle-1;
       return _binarySearch(arr,startIndex,endIndex,value);
    }else if(arr[middle]<value){
        startIndex=middle+1;
        return _binarySearch(arr,startIndex,endIndex,value);
    }
}
var SearchUtils=function(arr){
     this.array=arr;
}
SearchUtils.prototype.binarySearch= function (value) {
   var index= _binarySearch(this.array,0,this.array.length-1,value);
   return index;
}