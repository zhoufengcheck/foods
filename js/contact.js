var interval;
//选项卡
function change(){
	var contents=getElementsByClassName('content',document);
	var lis=toArray(getElementsByClassName('contactNav',document)[0].getElementsByTagName('li'));
	lis=lis.slice(2,lis.length);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
				contents[j].style.display="none";
			}
			this.className="checked";
			contents[this.index].style.display="block";
		}
	}
}
//图片无缝滚动
var currents=0;
function foodShows(){
	var graduShow=getElementsByClassName('foodRecomShow',document)[0];	
	var pic=getElementsByClassName('pic',document)[0];
	var imgs=toArray(pic.getElementsByTagName('img'));
	currents=currents+1>3?4:currents+1;
	if(currents==4){
		pic.className='pic';
		pic.style.left=0;
		setTimeout(function(){
			currents=1;
			pic.style.left=(-1*currents)*540+'px';
			pic.className='pic slow';
		},20);
	}
	else
		pic.style.left=(-1*currents)*540+'px';
	pic.onmouseover=function(){
		clearInterval(interval1);
	}
	pic.onmouseout=function(){
		interval1=setInterval(foodShows,3000);
	}
}
function stopdefault(e){
	if(e&&e.preventDefault){
	  e.preventDefault();
	}
	else{
	  window.event.returnValue = false;
	}
}
//联系我们表单控件
function contactUs(){	
	var sub=document.getElementById('contactUs');
	var email=document.getElementById('email');
	var name=document.getElementById('name');
	var tel=document.getElementById('tel');
	var message=document.getElementById('message');
	sub.onclick=function(e){
		stopdefault(e);
		if(name.value==''){
			alert(name.title+'不能为空');
		}
		else if(tel.value==''){
			alert(tel.title+'不能为空');
		}
		else if(email.value==''){
			alert(email.title+'不能为空');
		}
		else if(message.value==''){
			alert(message.title+'不能为空');
		}
		else{
			if(!(/\b\d{11}\b/.test(tel.value))){
				alert('请填写11位电话号码')
			}
			else if(!(/\@.+(.com)\b/.test(email.value))){
				alert('邮箱填写方式有误差')
			}
			else{				
				var ensureName=document.getElementById('ensureName');
				ensureName.innerHTML=name.value;
				var ensureTel=document.getElementById('ensureTel');
				ensureTel.innerHTML=tel.value;
				var ensureEm=document.getElementById('ensureEm');
				ensureEm.innerHTML=document.getElementById('email').value;
				var ensureMe=document.getElementById('ensureMe');
				ensureMe.innerHTML=message.value;				
				var popBox=document.getElementById('popBox')
				popBox.style.zIndex=1000;
				var yes=document.getElementById('yes');
				yes.onclick=function(e){
					stopdefault(e);
					popBox.style.zIndex=-1;
				}
				var no=document.getElementById('no');
				no.onclick=function(e){
					stopdefault(e);
					popBox.style.zIndex=-1;
				}
			}
		}
	}
	
}
var interval1;
window.onload=function(){
	banner();
	interval=setInterval(banner,3000);	

	contactUs();

	foodShows();
	interval1=setInterval(foodShows,3000);

	change();
}
