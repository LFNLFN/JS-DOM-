// 切换图片框内容以及图片描述
function showPic(whichpic) {
	// pic change
	if (!document.getElementById('placeholder')) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute("src",source);
	// text change
	if (document.getElementById('description')) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById('description');
		description.firstChild.nodeValue = text;
	}
	return true;
}

// 用class属性作挂钩，新建窗口显示图片，用循环遍历links控制其行为
function popUp(winURL) {
	window.open(winURL,"popup","width=320px,height=480");
}
function prepareLinks() {
	if (!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName('a');
	for (var i = 0; i<links.length; i++) {
		if (links[i].getAttribute('class') == 'popup') {
			links[i].onclick = function() {
				popUp(this.getAttribute('href'));
				return false;
			}
		}
	}
}
// level up!!直接以ul的id作挂钩循环遍历，控制其子元素的行为。
function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById('imagegallery')) return false;
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this); 
		}
	}
}

// 动态创建完成脚本行为的标签
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	//生成后进行拼接
	description.appendChild(desctext);
	// document.getElementsByTagName("body")[0].appendChild(placeholder);
	// document.getElementsByTagName("body")[0].appendChild(description);
	var gallery = document.getElementById("imagegallery");
	// gallery.parentNode.insertBefore(placeholder,gallery);
	// gallery.parentNode.insertBefore(description,gallery);
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	};
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);