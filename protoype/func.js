/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
function _memoize(fn) {
    var cache={};
    return function () {
        var key=arguments.length+Array.prototype.join.call(arguments,',')
        if(cache.hasOwnProperty(key)){
            return cache[key];
        }else {
            return cache[key]=fn.apply(this,arguments)
        }
    }
}
function _underscoreMemoize(fn,hasher) {
    var cache={};
    _underscoreMemoize= function () {
        var key=hasher?hasher.apply(this,arguments):''
        if(cache.hasOwnProperty(key)){
            return cache[key];
        }else {
            return cache[key]=fn.apply(this,arguments)
        }
    }
    _underscoreMemoize.cache={}
    return _underscoreMemoize
}
function _lazyFunc() {
    var date=new Date();
    _lazyFunc=function () {
        return date;
    }
    return _lazyFunc()
}
function _addEvent(type,func,el) {
    if(window.addEventListener){
       return function (type,func,el) {
            el.addEventListener(type,func,false)
        }
    }else if(window.attachEvent){
        return function (type,func,el) {
            el.attachEvent('on' + type, func)
        }
    }
}
var CpFunc=function () {
    
}
CpFunc.prototype.partial=function (fn) {
    var arg=[].slice.call(arguments,1);
    return function () {
        var newArg=arg.concat([].slice.call(arguments))
        return fn.apply(this,newArg);
    }
}
/**
 * 惰性函数,这个函数返回首次调用时的 Date 对象，注意是首次
 */
CpFunc.prototype.lazyFunc=function () {
  return  _lazyFunc();
}
/**
 * 为了兼容现代浏览器和 IE 浏览器
 * @param type 事件类型
 * @param func 回调函数
 * @param el 元素
 */
CpFunc.prototype.addEvent =function (type,func,el) {
        return _addEvent(type,func,el)
}
CpFunc.prototype.compose=function() {
   var args=arguments,start=args.length-1;
   return function () {
      var result = args[start].apply(this,arguments),i=start;
      while(i--){
         result= args[i].call(this,result);
      }
       return result;
   }

};
/**
 * 函数记忆，空间换时间
 */
CpFunc.prototype.memoize=function (fn) {
    return _memoize(fn);
}
CpFunc.prototype.underscoreMemoize =function (fn,hasher) {
   return _underscoreMemoize(fn,hasher)
}