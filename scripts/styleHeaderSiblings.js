function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        addClass(elem,"intro");
    }
}
function getNextElement(node) {
    if (node.nodeType==1) return node;
    if (node.nextSibling) return getNextElement(node.nextSibling);
    return null;
}

function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    }else{
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName; 
    }
}
addLoadEvent(styleHeaderSiblings);