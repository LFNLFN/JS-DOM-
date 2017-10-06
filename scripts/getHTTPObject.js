//兼容所有浏览器以及IE的不同版本
function getHTTPObject() {
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function() {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch(e){}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch(e){}
            try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch(e){}
            return flase;
        }
    }
    return new XMLHttpRequest();
}