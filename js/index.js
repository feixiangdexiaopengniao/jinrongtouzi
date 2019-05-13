var nav = document.getElementsByClassName("nav");
var navin = document.getElementById('navin');
var buttons = document.getElementById("buttons");
var bannerwidth = document.getElementById("banner");
bannerwidth = bannerwidth.offsetWidth;
buttons.style.left=bannerwidth/2-60+"px"
function navon(){
	navin.style.background="transparent";
}
function navout(){
	navin.style.background="#a11c33";
}
window.onload=function(){
	var rbox = document.getElementById("banner");
	var rphotos = document.getElementById("photos");
	var rpli = rphotos.getElementsByTagName("li");
	var rbuttons = document.getElementById("buttons");
	var rbli = rbuttons.getElementsByTagName("li");
	var rpliwidth = rpli[0].offsetWidth;
	var timer = null;
	var time = null;
	var i = 0;
	rphotos.style.width=rpliwidth*rpli.length+"px";
	for(var i1=0;i1<rbli.length;i1++)
	{
		rbli[i1].index=i1;
		rbli[i1].onmouseover=function(){
			change(this.index);
		}
	}
	rbox.onmouseover=function(){
		clearInterval(time);
	}
	rbox.onmouseout=function(){
		time=setInterval(function(){
			change(i);
			i++;
			if(i==rbli.length){
				i=0;
			}    
		},3000);
	}
	clearInterval(time);
	time=setInterval(function(){
		change(i);
		i++;
		if(i==rbli.length){
			i=0;
		} 
	},3000);
	function change(k){
		for(var i2=0;i2<rbli.length;i2++){
			rbli[i2].className="";
		}
		rbli[k].className="active";
		clearInterval(timer);
		timer=setInterval(function(){
			var Speed=(-rphotos.offsetLeft-rpliwidth*k)/4;
			var x=Speed>0?Math.ceil(Speed):Math.floor(Speed);
			rphotos.style.left=x+rphotos.offsetLeft+'px';
		},10)
	}
	var speed = 60;
	var timer1 = null;
	var feature = document.getElementById("feature");
	var scrollnews = feature.getElementsByTagName("ul");
	function ScrollImgLeft(){ 
		if(scrollnews[0].offsetWidth-feature.scrollLeft<=0){
			feature.scrollLeft-=scrollnews[0].offsetWidth; 
		} 
		else{
			feature.scrollLeft++; 
		}
	}
	timer1=setInterval(ScrollImgLeft,speed); 
	feature.onmouseover = function(){
		clearInterval(timer1);
	}
	feature.onmouseout = function(){
		timer1 = setInterval(ScrollImgLeft,speed); 　　　　
	}  
	ScrollImgLeft();
	var speed1 = 50;
	var timer2 = null;
	var featureB = document.getElementById("featureB");
	var scrollphoto = featureB.getElementsByTagName("div"); 
	function ScrollPhotoLeft(){ 
		if(scrollphoto[0].offsetWidth-featureB.scrollLeft<=0){
			featureB.scrollLeft-=scrollphoto[0].offsetWidth; 
		} 
		else{
			featureB.scrollLeft++; 
		}
	}
	timer2=setInterval(ScrollPhotoLeft,speed1); 
	featureB.onmouseover = function(){
		clearInterval(timer2);
	}
	featureB.onmouseout = function(){
		timer2 = setInterval(ScrollPhotoLeft,speed1); 　　　　
	}  
	ScrollPhotoLeft();
}
var menub = document.getElementById("menub");
var menuz = document.getElementById('menuz');
var menug = document.getElementById('menug');
var messageb = document.getElementById('messageb');
var messagez = document.getElementById('messagez');
var messageg = document.getElementById('messageg');
function menubover(){
	menub.style.background="#c1223e";
	menub.style.color="#ffffff";
	messageb.style.display="block";
	menuz.style.background="transparent";
	menuz.style.color="#000000";
	messagez.style.display="none";
	menug.style.background="transparent";
	menug.style.color="#000000";
	messageg.style.display="none";
}
function menuzover(){
	menuz.style.background="#c1223e";
	menuz.style.color="#ffffff";
	messagez.style.display="block";
	menub.style.background="transparent";
	menub.style.color="#000000";
	messageb.style.display="none";
	menug.style.background="transparent";
	menug.style.color="#000000";
	messageg.style.display="none";
}
function menugover(){
	menug.style.background="#c1223e";
	menug.style.color="#ffffff";
	messageg.style.display="block";
	menuz.style.background="transparent";
	menuz.style.color="#000000";
	messagez.style.display="none";
	menub.style.background="transparent";
	menub.style.color="#000000";
	messageb.style.display="none";
}