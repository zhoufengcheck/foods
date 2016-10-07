var num=0
var interval;
//图片平滑运动
function pingHua(){
	var contentbottom=getElementsByClassName('contentbottom',document);
	num=num+1>8?0:num+1;	
	for(var i=0;i<contentbottom.length;i++){
		var ul=contentbottom[i].getElementsByTagName('ul')[0];
		ul.style.left=-123*num+'px';
		ul.onmouseover=function(){
			clearInterval(interval1);
		}
		ul.onmouseout=function(){
			interval1=setInterval(pingHua,3000);
		}
	}
}
var interval1
window.onload=function(){
	banner();
	interval=setInterval(banner,3000);
	pingHua();
	interval1=setInterval(pingHua,3000);
}
