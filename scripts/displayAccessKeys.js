function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    //遍历所有a，提取accesskey和a标签内容，并存入关联数组  
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        if (!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
    // 遍历数组创建列表
    var list = document.createElement("ul");
    for (key in akeys) {
        var text = akeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    // 创建标题，插入标题和列表
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(list);
}
addLoadEvent(displayAccessKeys);