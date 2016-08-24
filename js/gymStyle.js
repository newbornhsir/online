var imgList = document.getElementsByClassName("coache")[0].children;
var coache = document.getElementsByClassName("coache")[0];
//var w = document.getElementsByClassName("coache")[0].offsetWidth;
//console.log(w);
//var h = coache.getAttribute("class");
//console.log(h);
for(var i = 0 ; i < imgList.length ; i++){
	imgList[i].index = i+1;
	console.log(imgList[i].offsetWidth);
}
