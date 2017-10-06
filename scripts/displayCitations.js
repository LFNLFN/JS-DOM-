function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length<1) continue;
        var elem = quoteChildren[quoteChildren.length-1];
        //取得来源网址和来源插入元素
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //创建注释链接
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);