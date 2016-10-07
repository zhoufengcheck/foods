//选项卡
function tabControl(){
	var uls=toArray(getElementsByClassName('list',document));
	for(var i=0;i<uls.length;i++){
		uls[i].divs=allNextElementSibling(uls[i]);
		uls[i].lis=toArray(uls[i].getElementsByTagName('li'));
		uls[i].onmousemove=function(){
			var lis=this.lis;
			var divs=this.divs;
			for(var j=0;j<lis.length;j++){
				lis[j].index=j;
				lis[j].onclick=function(){
					for(var z=0;z<lis.length;z++){
						if(lis[z].className="checked")lis[z].className="";
						divs[z].className=divs[z].className.replace(/.+/,this.parentNode.title);
					}
					this.className="checked";
					divs[this.index].className+=' active';				
				}
			}
		}
	}
}
window.onload=function(){
	banner();
	interval=setInterval(banner,3000);
	tabControl();
}
