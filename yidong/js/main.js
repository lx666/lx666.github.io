// banner轮播
var box=document.querySelector(".banner");
var imgs=document.querySelectorAll(".bannertu li");
var btnsban=document.querySelectorAll(".lunbo li");
var zuoBtn=document.querySelector("#zuo-btn");
var youBtn=document.querySelector("#you-btn");
var num=0;  //当前
var flag=true;
var z=5;
var t=setInterval(move,3000);
function move(){
    imgs[num].classList.add("leftOut");
    btnsban[num].classList.remove("active");
    num++;
    if(num>imgs.length-1){
        num=0;
    }
    imgs[num].classList.add("leftIn"); //加过之后
    btnsban[num].classList.add("active");
    imgs[num].style.zIndex=z++;
}
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
        flag=true;
    })
});
btnsban.forEach(function (btn,index) {// index 接下来的
    btn.onclick=function () {
        if(num==index){
            return
        }
        if(num<index){
            imgs[num].classList.add("leftOut");
            imgs[index].classList.add("leftIn");
        }else{
            imgs[num].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
        }
        btnsban[num].classList.remove("active");
        btnsban[index].classList.add("active");
        imgs[index].style.zIndex=z++;
        num=index;
    }
});
box.onmouseover=function () {
    clearInterval(t);
};
box.onmouseout=function () {
    t=setInterval(move,3000);
};
zuoBtn.onclick=function () {
    if(flag){
        imgs[num].classList.add("rightOut");
        btnsban[num].classList.remove("active");
        num--;
        if(num==-1){
            num=imgs.length-1;
        }
        imgs[num].classList.add("rightIn");
        imgs[num].style.zIndex=z++;
        btnsban[num].classList.add("active");
    }
    flag=false;
};
youBtn.onclick=function () {
    move();
    flag=false;
};
//header
var denglu=document.querySelectorAll(".header-right .headerr1");
var dengluxia=document.querySelectorAll(".dengluxia");
Array.from(denglu).forEach(function (id,vd) {
    id.onmouseover=function () {
        dengluxia[vd].style.display="block";
    }
    id.onmouseout=function () {
        dengluxia[vd].style.display="none";
    }
});
var yingye=document.querySelectorAll(".headerr2");
var yingyexia=document.querySelectorAll(".yingye");
Array.from(yingye).forEach(function (iy,vy) {
    iy.onmouseover=function () {
        yingyexia[vy].style.display="block";
    }
    iy.onmouseout=function () {
        yingyexia[vy].style.display="none";
    }
});
//太原
var taiyuan=document.querySelector(".sec-left2zi");
var taiyuanxia=document.querySelector("ul.taiyuanxia");
taiyuan.onclick=function (e) {
    taiyuanxia.style.display="block";
    e.stopPropagation();
};
document.body.onclick=function () {
    taiyuanxia.style.display="none"
};
// nav
var navs=document.querySelectorAll(".navli");
var navxia=document.querySelectorAll("ul#ydshop");
var sanjiao=document.querySelectorAll(".sanjiao");
var num1=0;
Array.from(navs).forEach(function (vn,inav) {
    vn.onmouseover=function () {
        for(var j=0;j<navs.length;j++) {
            sanjiao[j].style.display="none";
            navxia[j].style.display="none";
        }
        navxia[inav].style.left=-260*inav-160+"px";
        navxia[inav].style.display="block";
        sanjiao[inav].style.display="block";
    };
    vn.onmouseout=function () {
        sanjiao[inav].style.display="none";
        navxia[inav].style.display="none";
    }
});
// 广告
var zuobtng=document.querySelector(".main4-zuo");
var youbtng=document.querySelector(".main4-you");
var guanggaoli=document.querySelectorAll(".guanggao ul li");
var guanggao=document.querySelector(".guanggao");
function moveg1(){
    var str=guanggaoli[0].innerHTML;
    for(let i=0;i<guanggaoli.length-1;i++){
        guanggaoli[i].innerHTML=guanggaoli[i+1].innerHTML;
    }
    guanggaoli[guanggaoli.length-1].innerHTML=str;

}
function moveg2(){
    var str1=guanggaoli[guanggaoli.length-1].innerHTML;
    for(let i=guanggaoli.length-1;i>0;i--){
        guanggaoli[i].innerHTML=guanggaoli[i-1].innerHTML;
    }
    guanggaoli[0].innerHTML=str1;
}
var t5=setInterval(moveg2,5000);
guanggao.onmouseover=function(){
    clearInterval(t5);
}
guanggao.onmouseout=function(){
    t5=setInterval(moveg1,5000);
};
zuobtng.onclick=function () {
    moveg2()
};
youbtng.onclick=function () {
    moveg1()
};
//banner下
var mainban2=document.querySelectorAll(".main2-tuul li");
var main2ul=document.querySelector(".main2-tuul");
var main2=document.querySelector(".main2");
var main2zuobtn=document.querySelector(".main2-zuobtn");
var main2youbtn=document.querySelector(".main2-youbtn");
var cishu=4;
var flag2=true;
 function moves1() {
     main2ul.style.transition="all 1s";
     cishu++;
     main2ul.style.marginLeft=-295*cishu+"px";
 }
main2ul.addEventListener("transitionend",function () {
    if(cishu==12){
        cishu=4;
        main2ul.style.transition="none";
        main2ul.style.marginLeft=-295*cishu+"px";
    }else if(cishu==0){
        main2ul.style.transition="none";
        cishu=8;
        main2ul.style.marginLeft=-295*cishu+"px";
    }
    flag2=true;
})
main2zuobtn.onclick=function () {
    if(flag2){
        cishu-=2;
        moves1();
    }
    flag2=false;
 }
main2youbtn.onclick=function () {
    if(flag2){
        flag2=false;
        moves1();
    }
 }
var yh=setInterval(moves1,3000);
main2.onmouseover=function () {
    clearInterval(yh);
 }
main2.onmouseout=function () {
    yh=setInterval(moves1,3000);
 };
