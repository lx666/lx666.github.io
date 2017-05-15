var btnsban=document.querySelectorAll(".hualun li.yuan");
var consban=document.querySelectorAll(".bannertu li.banner-tu");
var banner=document.querySelector(".banner");
var zuotou=document.querySelector(".zuotou");
var youtou=document.querySelector(".youtou");
var lis=document.querySelectorAll(".lists>li");
var seconds=document.querySelectorAll(".seconds");
var sousuozi=document.querySelector("#sousuoziput");
var wx=document.querySelector(".w");
var wx2=document.querySelector(".wei2");
var tb;
var nowbtnsban=btnsban[0];
var nowconsban=consban[0];
Array.from(btnsban).forEach(function (v,index) {

    v.onmouseover=function () {
        num=index;
        clearTimeout(tb);
        tb=setTimeout(function () {
        nowbtnsban.style.background="#dddddd";
        v.style.background="red";
        nowbtnsban=v;
        nowconsban.style.opacity=0;
        nowconsban.style.zIndex=1;
        consban[index].style.opacity=1;
        consban[index].style.zIndex=2;
        nowconsban=consban[index];
        },300)
    }
});
var num=0;
var t=setInterval(ban,2000);
function  ban() {
    num++;
    if (num == btnsban.length) {
        num = 0;
    }
    if(num==-1){
        num=btnsban.length-1;
    }
    nowbtnsban.style.background="#dddddd";
    btnsban[num].style.background="red";
    nowbtnsban=btnsban[num];
    nowconsban.style.opacity=0;
    nowconsban.style.zIndex=1;
    consban[num].style.opacity=1;
    consban[num].style.zIndex=2;
    nowconsban=consban[num];
}
banner.onmouseover=function () {
    clearInterval(t);
};
banner.onmouseout=function (){
    t=setInterval(ban,2000);
};
youtou.onclick=function () {
    ban();
};
zuotou.onclick=function () {
    num-=2;
    ban();
};
var arr=Array.from(seconds).map(v=>v.querySelectorAll("li").length*30-20);
Array.from(lis).forEach(function (li,id) {
    li.onmouseover=function(){
       seconds[id].style.height=arr[id]+"px";
    };
    li.onmouseout=function(){
        seconds[id].style.height=0;
    };
});
sousuozi.onfocus=function () {
    if(this.value=="搜“衬衫”，体验与众不同"){
        this.value="";
    }
};
sousuozi.onblur=function () {
    if(this.value==""){
        this.value="搜“衬衫”，体验与众不同";
    }
};
wx.onmouseover=function () {
    wx2.style.display="block";
};
wx.onmouseout=function () {
    wx2.style.display="none";
};

var backtop=document.querySelector(".fix");
backtop.onclick=function () {
    animate(document.body,{scrollTop:0},500);
}
