//选项卡
function tabControl(){
	var cookAtten=getElementsByClassName('cookAtten',document)[0];
	var lis=cookAtten.getElementsByTagName('li');
	var AttenContent=getElementsByClassName('AttenContent',document);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
				AttenContent[j].className="AttenContent right";
			}
			this.className="checked";
			AttenContent[this.index].className="AttenContent";
		}
	}	
}
//无缝滚动
var currents=0;
function picChange(){
	var next=document.getElementById('next');
	var relatedInner=getElementsByClassName('relatedInner',document)[0];
	next.onclick=function(){
		currents=currents+1>4?4:currents+1;
		if(currents==4){
			relatedInner.className="relatedInner quick";
			relatedInner.style.top=0+'px';
			setTimeout(function(){
				currents=1;
				relatedInner.style.top=(-currents)*308+'px';
				relatedInner.className="relatedInner";
			},10);
		}
		else
			relatedInner.style.top=(-currents)*308+'px';
	}
}
window.onload=function(){
	banner();
	interval=setInterval(banner,3000);
	tabControl();
	picChange();
}
