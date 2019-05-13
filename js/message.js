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
}