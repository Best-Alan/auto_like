var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === 4) {
		var text = this.responseText;
		document.write(text);
	}
});

xhr.open("GET", "https://yhbz.rth1.link/auto_like/content_in");
xhr.setRequestHeader("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

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
