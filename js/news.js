// //地图
// function maps(){
// 	 var map = new AMap.Map('container',{
//      resizeEnable: true,
//      zoom:9,
//      center: [116.2695662200,40.1312580041]
     
//  });
//  var marker = new AMap.Marker({
//      position: [116.3695662200,40.2312580041],
//      map:map//添加标记
//  });
//  AMap.plugin('AMap.AdvancedInfoWindow',function(){
//    var infowindow = new AMap.AdvancedInfoWindow({
//     content: '<h3>高德地图</h1>'+
//               '<div class="content">我的位置</div>',
//      offset: new AMap.Pixel(0, -30),
//    });
//    infowindow.open(map,new AMap.LngLat(116.3695662200,40.2312580041));
//     // var clickHandle=AMap.event.addListener(marker,'click',function(){
//     //  infowindow.open(map,marker.getPosition());
//     // });
 
//  });
//  AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){//加载工具条和比例尺两个插件放到数组中
//      var toolBar = new AMap.ToolBar();//在回调函数里进行控件的生成和添加
//      var scale = new AMap.Scale();
//      map.addControl(toolBar);
//      map.addControl(scale);
//  });  
// }
//选项卡加上图片切换
function tabControl(){
	var beautyNav=getElementsByClassName('beautyNav',document)[0];
	var lis=toArray(beautyNav.getElementsByTagName('li'));
	var beautyContent=getElementsByClassName('beautyContent',document)[0];
	var lis2=toArray(beautyContent.getElementsByTagName('li'));
	var beautyPic=document.getElementById('beautyPic');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis2[j].className="";
				if(lis[j].className='checked')lis[j].className=""
			}
			beautyPic.src=beautyPic.src.replace(/(\w{7})(\.jpg)$/,this.title+'$2')
			this.className='checked';
			lis2[this.index].className="center";
		};
	}
}
//消息栏的图片切换
function picChange(){
	var hot=getElementsByClassName('hot',document)[0];
	var lis=toArray(hot.getElementsByTagName('li'));
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].spans=toArray(lis[i].getElementsByTagName('span'));
		lis[i].img=lis[i].getElementsByTagName('img')[0];
		lis[i].onmouseover=function(){
			var img=this.img;
			for(var j=0;j<this.spans.length;j++){
				this.spans[j].onmouseover=function(){
					img.src=img.src.replace(/(\w{6})(\.jpg)$/,this.title+'$2');
				}
			}
		};
	}
}
var interval;
window.onload=function(){
	banner();
	interval=setInterval(banner,3000);
	picChange();
	// maps();
	tabControl();
}