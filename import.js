var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === 4) {
		var text = this.responseText;
		document.write(text);
	}
});

xhr.open("GET", "https://cdn.jsdelivr.net/gh/Best-Alan/auto_like@main/content_in.html");
xhr.setRequestHeader("User-Agent", window.navigator.userAgent);

xhr.send();/*
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', "https://yhbz.rth1.link/auto_like/content_in.html", true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
	//if (httpRequest.readyState == 4 && httpRequest.status == 200) {

	} else {
		alert("completed");
	}
};*/
