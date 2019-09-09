// 防抖:函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。如下图，持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件。
function debounce(fn, wait) {    
    var timeout = null;    
    return function() {        
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(fn, wait);    
    }
}
// 处理函数
function handle() {    
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
