/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
/**
 * 深度拷贝内部函数
 * @param obj
 * @return {*}
 * @private
 */
function _deepCopy(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? _deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
var CpObject=function (obj) {
    this.obj=obj;
}
/**
 * 对象浅拷贝
 * @return {*}
 */
CpObject.prototype.shallowCopy=function () {
    var value,newObj;
    if(typeof this.obj !=="object"){
        return;
    }
    newObj = this.obj instanceof Array ? [] : {};
    for(value in this.obj){
        if(this.obj.hasOwnProperty(value)){
            newObj[value]=this.obj[value];
        }
    }
    return newObj;
}
/**
 * 对象深拷贝
 * @return {*}
 */
CpObject.prototype.deepCopy=function () {
    return _deepCopy(this.obj);
}
