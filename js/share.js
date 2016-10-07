var current=0;
var interval;
function banner(){
	var banners=getElementsByClassName('banner',document)[0];
	var ul=banners.getElementsByTagName('ul')[0];
	var imgs=toArray(ul.getElementsByTagName('img')).slice(1,3);
	var right1=document.getElementById('right');
	var left1=document.getElementById('left');
	banners.onmousemove=function(){
		clearInterval(interval);
	}
	banners.onmouseout=function(){
		interval=setInterval(banner,3000);
	}
	right1.onclick=function(){
		clearInterval(interval);
		for(var i=0;i<imgs.length;i++){
			current=current+1>5?1:current+1;
			imgs[i].src=imgs[i].src.replace(/(\w{7})(\.jpg)$/,imgs[i].alt+current+"$2");
		}
		interval=setInterval(banner,3000);
	};
	left1.onclick=function(){
		clearInterval(interval);
		for(var i=0;i<imgs.length;i++){
			current=current-1<1?6:current-1;
			imgs[i].src=imgs[i].src.replace(/(\w{7})(\.jpg)$/,imgs[i].alt+current+'$2');
		}
		interval=setInterval(banner,3000);
	};
	for(var i=0;i<imgs.length;i++){
		current=current+1>5?1:current+1;
		imgs[i].src=imgs[i].src.replace(/(\w{7})(\.jpg)$/,imgs[i].alt+current+'$2');
	}
}
