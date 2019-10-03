function timeGetText(url,timeout,callback) {
    var request = new XMLHttpRequest();
    var timeout = false;
    var timer = setTimeout(function(){
        timeout = true;
        request.abort();
    },timeout)
    request.open("GET",url)
    request.onreadystatechange = function(){
        if (request.readyState !== 4) return;
        if (timeout) return ;
        clearTimeout(timeout);
        if (request.status === 200) {
            callback(request.responseText)
        }
    }
    request.send(null)
}
