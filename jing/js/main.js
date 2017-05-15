// banner轮播
var consban=document.querySelectorAll("ul.banner-middle-top-tu li");
var btnsban=document.querySelectorAll("ul.banner-lunbo li");
var banner1=document.querySelector(".banner-middle-top");
var zuobanbtn=document.querySelector(".banner-zuo");
var youbanbtn=document.querySelector(".banner-you");
var nowconsban=consban[0];
var nowbtnsban=btnsban[0];
var tb;
Array.from(btnsban).forEach(function (vb,ib) {
    vb.onmouseover=function () {
        num=ib;
        clearTimeout(tb);
        tb=setTimeout(function () {
            nowbtnsban.style.background="#fff";
            vb.style.background="#db192a";
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
    nowbtnsban.style.background="#fff";
    btnsban[num].style.background="#db192a";
    nowbtnsban=btnsban[num];
    nowconsban.style.opacity=0;
    nowconsban.style.zIndex=1;
    consban[num].style.opacity=1;
    consban[num].style.zIndex=2;
    nowconsban=consban[num];
}
banner1.onmouseover=function () {
    clearInterval(t);
};
banner1.onmouseout=function (){
    t=setInterval(ban,4000);
};
zuobanbtn.onclick=function(){
    num-=2;
    ban();
};
youbanbtn.onclick=function () {
    ban();
};
// 关闭top广告
var toptu=document.querySelector(".top");
var closebtn=document.querySelector("#topguan");
closebtn.onclick=function () {
    toptu.style.display="none";
}
// top搜索 左侧栏
var topsousuo=document.querySelector(".topsousuo");
var faxian=document.querySelector(".miaosha");
var xiangpz=document.querySelector(".xiangbox");
var zuocelan=document.querySelector("#zuocelan");
var zuocelanbtn=document.querySelectorAll("#zuocelan ul li");
var celanjs=document.querySelectorAll(".celanjs");
window.onscroll=function () {
    var st=document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop;
    var faxiantop=faxian.offsetTop;
    var xiangpztop=xiangpz.offsetTop;
    if(st>faxiantop){
        topsousuo.style.top=0;
    }else {
        topsousuo.style.top=-50+"px";
    }
    if(st>xiangpztop){
        zuocelan.style.width=34+"px";
        zuocelan.style.height=538+"px";
    }else{
        zuocelan.style.width=0+"px";
        zuocelan.style.height=0+"px";
    }
    Array.from(zuocelanbtn).forEach(function (vzuoce,iuzoce) {
        vzuoce.onclick=function () {
            var celancontop=celanjs[iuzoce].offsetTop;
            console.log(celancontop)
            animate(document.body,{scrollTop:celanjs[iuzoce].offsetTop});
        }
    })
};
//header开始
var myjingdong=document.querySelectorAll(".wodejingdong");
var myjingdongxia=document.querySelectorAll("#jingdongxia");
Array.from(myjingdong).forEach(function (hli1,valli1) {
    hli1.onmouseover=function () {
        myjingdongxia[valli1].style.display="block";
    };
    hli1.onmouseout=function () {
        myjingdongxia[valli1].style.display="none";
    };
});
var mykehu=document.querySelectorAll(".kehufuwu");
var mykehuxia=document.querySelectorAll("#kehuxia");
Array.from(mykehu).forEach(function (vke,ike) {
    vke.onmouseover=function () {
        mykehuxia[ike].style.display="block";
    };
    vke.onmouseout=function () {
        mykehuxia[ike].style.display="none";
    };
});
var mywangzhan=document.querySelectorAll(".wangzhandao");
var mywangxia=document.querySelectorAll(".wangzhandh");
Array.from(mywangzhan).forEach(function (vw,iw) {
    vw.onmouseover=function () {
        mywangxia[iw].style.display="block";
    };
    vw.onmouseout=function () {
        mywangxia[iw].style.display="none";
    };
});
//banner 左
var navsz=document.querySelectorAll(".banner-main>ul>li");
var navzuo=document.querySelectorAll(".cate_part");
Array.from(navsz).forEach(function (vnz,inavz) {
    vnz.onmouseover=function (e) {
        navzuo[inavz].style.display="block";
        // navzuo[inavz].style.top=-31.19*inavz+"px";
        //e.stopPropagation();
    };
    vnz.onmouseout=function () {
        navzuo[inavz].style.display="none";
    }
});
//右侧固定
var ygd2=document.querySelectorAll(".ygd2");
var text1=document.querySelectorAll(".text1");
var totop=document.querySelector(".totop")
var t8;
Array.from(ygd2).forEach(function (ele,index) {
    hover(ele,function () {
        clearTimeout(t8);
        t8=setTimeout(function () {
            text1[index].classList.add("show1");
        },200)
    },function () {
        clearTimeout(t8);
        if(text1[index].classList.contains("show1")){
            text1[index].classList.remove("show1");
            text1[index].classList.add("hide1");
        }
    });
});
Array.from(text1).forEach(function (ele,index) {
    ele.addEventListener("animationend",function () {
        if(ele.classList.contains("hide1")){
            ele.classList.remove("hide1")
        }
    })
});
totop.onclick=function () {
    animate(document.body,{scrollTop:0},500);
};

