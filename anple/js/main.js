// banner轮播
var box=document.querySelector(".banner");
var imgs=document.querySelectorAll(".bannerjs a");
console.log(imgs)
var btnsban=document.querySelectorAll(".lunjs div");
var zuoBtn=document.querySelector(".banner-left");
var youBtn=document.querySelector(".banner-right");
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