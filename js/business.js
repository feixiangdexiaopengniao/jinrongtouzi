 window.onload=function(){
 var nav=document.getElementById('tab');
 var oNav=nav.getElementsByTagName('li');
 var container=document.getElementById('business_ltone');
 var oDiv=container.getElementsByClassName('business_list');
 for(var i=0;i<oNav.length;i++){
  oNav[i].index=i;
  oNav[i].onclick=function () {
  for(var i=0;i<oNav.length;i++){
   oNav[i].className='';
   oDiv[i].style.display="none";
  }
  this.className='act';
  oDiv[this.index].style.display="block"
  }
  for(var m=1;m<oNav.length;m++){
   oNav[m].className='';
   oDiv[m].style.display="none";
  }
 }
 };
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
var act = document.getElementsByClassName("act");
var actin = document.getElementById('actin');
function acton(){
  actin.style.background="transparent";
}
function actout(){
  actin.style.background="#c1223e";
}
var lists = document.getElementsByClassName("business_list");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var first = document.getElementById("first");
var before = document.getElementById("before");
var after = document.getElementById("after");
var last = document.getElementById("last");
var page = 1;
first.style.display="none";
before.style.display="none";
function Pone(){
  page = 1;
  first.style.display="none";
  before.style.display="none";
  after.style.display="inline-block";
  last.style.display="inline-block";
  one.setAttribute("class","checked");
  two.setAttribute("class","");
  three.setAttribute("class","");
  four.setAttribute("class","");
  five.setAttribute("class","");
  six.setAttribute("class","");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[0].style.display="block";
}
function Ptwo(){
  page = 2;
  first.style.display="inline-block";
  before.style.display="inline-block";
  after.style.display="inline-block";
  last.style.display="inline-block";
  one.setAttribute("class","");
  two.setAttribute("class","checked");
  three.setAttribute("class","");
  four.setAttribute("class","");
  five.setAttribute("class","");
  six.setAttribute("class","");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[1].style.display="block";
}
function Pthree(){
  page = 3;
  first.style.display="inline-block";
  before.style.display="inline-block";
  after.style.display="inline-block";
  last.style.display="inline-block";
  one.setAttribute("class","");
  two.setAttribute("class","");
  three.setAttribute("class","checked");
  four.setAttribute("class","");
  five.setAttribute("class","");
  six.setAttribute("class","");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[2].style.display="block";
}
function Pfour(){
  page = 4;
  first.style.display="inline-block";
  before.style.display="inline-block";
  after.style.display="inline-block";
  last.style.display="inline-block";
  one.setAttribute("class","");
  two.setAttribute("class","");
  three.setAttribute("class","");
  four.setAttribute("class","checked");
  five.setAttribute("class","");
  six.setAttribute("class","");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[3].style.display="block";
}
function Pfive(){
  page = 5;
  first.style.display="inline-block";
  before.style.display="inline-block";
  after.style.display="inline-block";
  last.style.display="inline-block";
  one.setAttribute("class","");
  two.setAttribute("class","");
  three.setAttribute("class","");
  four.setAttribute("class","");
  five.setAttribute("class","checked");
  six.setAttribute("class","");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[4].style.display="block";
}
function Psix(){
  page = 6;
  first.style.display="inline-block";
  before.style.display="inline-block";
  after.style.display="none";
  last.style.display="none";
  one.setAttribute("class","");
  two.setAttribute("class","");
  three.setAttribute("class","");
  four.setAttribute("class","");
  five.setAttribute("class","");
  six.setAttribute("class","checked");
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[5].style.display="block";
}
function Pbefore(){
  page--;
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[page-1].style.display="block";
  if(page==1){
    first.style.display="none";
    before.style.display="none";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","checked");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==2){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","checked");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==3){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","checked");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==4){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","checked");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==5){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","checked");
    six.setAttribute("class","");
  }
  else if(page==6){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="none";
    last.style.display="none";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","checked");
  }
}
function Pafter(){
  page++;
  for(var i = 0;i<lists.length;i++){
    lists[i].style.display="none";
  }
  lists[page-1].style.display="block";
  if(page==1){
    first.style.display="none";
    before.style.display="none";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","checked");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==2){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","checked");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==3){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","checked");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==4){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","checked");
    five.setAttribute("class","");
    six.setAttribute("class","");
  }
  else if(page==5){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="inline-block";
    last.style.display="inline-block";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","checked");
    six.setAttribute("class","");
  }
  else if(page==6){
    first.style.display="inline-block";
    before.style.display="inline-block";
    after.style.display="none";
    last.style.display="none";
    one.setAttribute("class","");
    two.setAttribute("class","");
    three.setAttribute("class","");
    four.setAttribute("class","");
    five.setAttribute("class","");
    six.setAttribute("class","checked");
  }
}
