var consban=document.querySelectorAll(".bannertu li.banner-tu");
var btnsban=document.querySelectorAll(".lunbo li");
var banner=document.querySelector(".banner");
var conspro=document.querySelectorAll(".swiper-wrapper li.swiper-slide");
var btnspro=document.querySelectorAll(".pro-lunbo li");
var pro=document.querySelector(".swiper-container pro-con1-left");
Array.from(btnsban).forEach(function (v,i) {
    num=i;
    v.onclick=function () {
        for(var j=0;j<btnsban.length;j++){
            btnsban[j].style.background="#333";
            consban[j].style.opacity=0.5;
            consban[j].style.zIndex=1;
        }
        this.style.background="#fff";
        consban[i].style.opacity=1;
        consban[i].style.zIndex=2;
    }
});
var num=0;
var t=setInterval(click,3000);
function click() {
    num++;
    if(num==btnsban.length){
        num=0;
    }
    for(var j=0;j<btnsban.length;j++){
        btnsban[j].style.background="#333";
        consban[j].style.opacity=0.5;
        consban[j].style.zIndex=1;
    }
    btnsban[num].style.background="#fff";
    consban[num].style.opacity=1;
    consban[num].style.zIndex=2;
}
banner.onmouseover=function () {
    clearInterval(t);
};
banner.onmouseout=function () {
    t=setInterval(click,3000);
};

/*
var tb;
Array.from(btnsban).forEach(function (vb,ib) {
    vb.onmouseover=function () {
        num=ib;
        clearTimeout(tb);
        tb=setTimeout(function () {
            nowbtnsban.style.background="#333";
            vb.style.background="#fff";
            nowbtnsban=vb;
            nowconsban.style.opacity=0;
            nowconsban.style.zIndex=1;
            consban[ib].style.opacity=1;
            consban[ib].style.zIndex=2;
            nowconsban=consban[ib];
        },500)
    }
});
var num=0;
var t=setInterval(ban,4000);
function  ban() {
    num++;
    if (num == btnsban.length) {
        num = 0;
    }
    nowbtnsban.style.background="#333";
    btnsban[num].style.background="#fff";
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
    t=setInterval(ban,4000);
};*/
Array.from(btnspro).forEach(function (ele,index) {
    num1=index;
    ele.onmouseover=function () {
        for(var k=0;k<btnspro.length;k++){
            btnspro[k].style.background="#3f084d";
            conspro[k].style.opacity=0;
            conspro[k].style.zIndex=1;
        }
        this.style.background="#0c8dcd";
        conspro[index].style.opacity=1;
        conspro[index].style.zIndex=2;
    }
});
var num1=0;
var t1=setInterval(pro,3000);
function move() {
    num++;
    if(num==btnsban.length){
        num=0;
    }
    for(var k=0;k<btnspro.length;k++){
        btnspro[k].style.background="#3f084d";
        conspro[k].style.opacity=0;
        conspro[k].style.zIndex=1;
    }
    btnspro[num1].style.background="#0c8dcd";
    conspro[num1].style.opacity=1;
    conspro[num1].style.zIndex=2;
}
pro.onmouseover=function () {
    clearInterval(t1);
};
pro.onmouseout=function () {
    t1=setInterval(click,3000);
};