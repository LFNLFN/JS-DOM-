function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("linklist")) return false;
    //生成标签并为图片设置属性
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    // 为超链接添加动态效果
    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    }
}
addLoadEvent(prepareSlideshow);