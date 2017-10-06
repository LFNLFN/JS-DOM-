
// window.onload的强化版本
function addLoadEvent(func) {
	var oldLoad = window.onload;
	if (typeof oldLoad !='function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldLoad();
			func();
		}
	}
}