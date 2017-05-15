var cons=document.querySelectorAll(".content1-left ul li");
var btns=document.querySelectorAll(".content1-left-center li");
var annius=document.querySelectorAll("#anniu");
var masks=document.querySelectorAll(".mask");
var btns2=document.querySelectorAll(".content1-right ul li");
var icon2=document.querySelector(".huan");
var masks2=document.querySelectorAll(".bofangmask");
var consban=document.querySelectorAll(".banner-tu li.bannertu");
var btnsban=document.querySelectorAll(".banner-tu ul.lunbo li");
var banner=document.querySelector(".banner-tu");
var nowconsban=consban[0];
var nowbtnsban=btnsban[0];
var color=["#1C53D2","#FFE4ED","#C8C8C8","#E8E6EE","#D6C3BF","#FC6C01"];
var ban1=document.querySelector(".banner");
var con1youjian=document.querySelector(".youjiantou");
var con1zuojian=document.querySelector(".zuojiantou");
var conleftcenter=document.querySelector(".content1-left-center");
var conleftbotright=document.querySelector(".content1-left-bottom-right");
var daohangzi=document.querySelectorAll(".banner-daohanglan");
var mao=document.querySelectorAll(".mao");
var floorbtn=document.querySelector(".celan");
var cleanjs=document.querySelectorAll(".cleanjs");
var content1=document.querySelector(".content");
var celan2=document.querySelectorAll(".celan .celan2");
var headerli1=document.querySelectorAll(".header-kuang-leftulli");
var secondheaderli1=document.querySelectorAll(".secondheaderli");
var headerli2=document.querySelectorAll(".header-kuang-leftulli2");
var secondheaderli2=document.querySelectorAll(".secondheaderli2");
var headerli3=document.querySelectorAll(".header-kuang-leftulli3");
var secondheaderli3=document.querySelectorAll(".secondheaderli3");
var headerli4=document.querySelectorAll(".header-kuang-leftulli4");
var secondheaderli4=document.querySelectorAll(".secondheaderli4");
var headerli5=document.querySelectorAll(".header-kuang-leftulli5");
var secondheaderli5=document.querySelectorAll(".wangzhandaohang");
var zuitop=document.querySelector(".zuitop");
var tips=document.querySelectorAll(".youce .tip");
var youces=document.querySelectorAll(".youce .youcejs");
var youcewei=document.querySelector(".youcewei");
var youce9=document.querySelector(".youce9");
var tb;
Array.from(btns).forEach(function (v,i) {
    v.onmouseover=function () {
        for(var j=0;j<btns.length;j++){
            annius[i].style.display="none";
            cons[j].style.display="none";
            masks2[j].style.display="none";
        }
        annius[i].style.display="block";
        cons[i].style.display="block";
        masks2[i].style.display="block";
    };
    v.onmouseout=function () {
        annius[i].style.display="none";
    }
});
Array.from(btns2).forEach(function(value,index){
    value.onmouseover=function () {
        masks[index].style.opacity=1;
    };
    value.onmouseout=function () {
        masks[index].style.opacity=0;
    }
});
icon2.onmouseover=function () {
    icon2.style.background="#DD2727";
};
icon2.onmouseout=function () {
    icon2.style.background="#fff";
};
Array.from(btnsban).forEach(function (vb,ib) {
    vb.onmouseover=function () {
        num=ib;
        clearTimeout(tb);
        tb=setTimeout(function () {
        nowbtnsban.style.background="#A2A2A2";
            vb.style.background="#F1F1F1";
            nowbtnsban=vb;
            nowconsban.style.opacity=0;
            nowconsban.style.zIndex=1;
            consban[ib].style.opacity=1;
            consban[ib].style.zIndex=2;
            nowconsban=consban[ib];
             ban1.style.background=color[ib]; 
        },500)
    }
});
var num=0;
var t=setInterval(ban,3000);
function  ban() {
    num++;
    if (num == btnsban.length) {
        num = 0;
    }
        nowbtnsban.style.background="#A2A2A2";
        btnsban[num].style.background="#F1F1F1";
        nowbtnsban=btnsban[num];
        nowconsban.style.opacity=0;
        nowconsban.style.zIndex=1;
        consban[num].style.opacity=1;
        consban[num].style.zIndex=2;
        nowconsban=consban[num];
       ban1.style.background=color[num];

}
    banner.onmouseover=function () {
        clearInterval(t);
    };
    banner.onmouseout=function (){
        t=setInterval(ban,2000);
    };
var num1=0;
con1youjian.onclick=function(){
    conleftcenter.style.marginLeft=-488+"px";
    con1zuojian.style.display="block";
    con1youjian.style.display="none";
};
con1zuojian.onclick=function(){
    conleftcenter.style.marginLeft=0+"px";
    con1youjian.style.display="block";
    con1zuojian.style.display="none";
};

var num2=0;
setInterval(function () {
    num2++;
    if(num2==3){
        num2=0;
    }
    conleftbotright.style.marginTop=-40*num2+"px";
},2000);
Array.from(daohangzi).forEach(function (vm,im) {
    vm.onmouseover=function () {
        mao[im].style.opacity="1";
    }
    vm.onmouseout=function () {
        mao[im].style.opacity="0";
    }
});
window.onscroll=function () {
    // var st=document.body.scrollTop;
    var st=document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop;
    var const1=content1.offsetTop;
    if(st>const1){
        floorbtn.style.width="35px";
        floorbtn.style.height="332px";
        zuitop.style.top=0;
    }else{
        floorbtn.style.width=0;
        floorbtn.style.height=0;
        zuitop.style.top="-50px";
    }
    Array.from(celan2).forEach(function (btn,indexc) {
        btn.onclick=function () {
            var vart=cleanjs[indexc].offsetTop;
            animate(document.body,{scrollTop:cleanjs[indexc].offsetTop});
        }
    });
};

Array.from(headerli1).forEach(function (hli1,valli1) {
    hli1.onmouseover=function () {
        secondheaderli1[valli1].style.display="block";
    };
    hli1.onmouseout=function () {
        secondheaderli1[valli1].style.display="none";
    };
});
Array.from(headerli2).forEach(function (hli2,valli2) {
    hli2.onmouseover=function () {
        secondheaderli2[valli2].style.display="block";
    };
    hli2.onmouseout=function () {
        secondheaderli2[valli2].style.display="none";
    };
});
Array.from(headerli3).forEach(function (hli3,valli3) {
    hli3.onmouseover=function () {
        secondheaderli3[valli3].style.display="block";
    };
    hli3.onmouseout=function () {
        secondheaderli3[valli3].style.display="none";
    };
});
Array.from(headerli4).forEach(function (hli4,valli4) {
    hli4.onmouseover=function () {
        secondheaderli4[valli4].style.display="block";
    };
    hli4.onmouseout=function () {
        secondheaderli4[valli4].style.display="none";
    };
});
Array.from(headerli5).forEach(function (hli5,valli5) {
    hli5.onmouseover=function () {
        secondheaderli5[valli5].style.display="block";
    };
    hli5.onmouseout=function () {
        secondheaderli5[valli5].style.display="none";
    };
});

var ty;
Array.from(youces).forEach(function (youcev,indexy) {
    hover(youcev,function () {
        clearTimeout(ty);//清除
        ty=setTimeout(function () {//延长
            tips[indexy].classList.add("show");
        },200);
    },function () {
        clearTimeout(ty);
        if(tips[indexy].classList.contains("show")){
            tips[indexy].classList.remove("show");
            tips[indexy].classList.add("hide");
        }
    })
});
Array.from(tips).forEach(function (tip) {
    tip.addEventListener("animationend",function () {
        if(tip.classList.contains("hide")){
            tip.classList.remove("hide");
        }
    })
});
youce9.onmouseover=function () {
    youcewei.style.display="block";
};
window.onclick=function () {
    youcewei.style.display="none";
}
youce9.onmouseout=function () {
    youcewei.style.display="none";
};

//banner左侧
var navsz=document.querySelectorAll(".banner-left>ul>li");
var navzuo=document.querySelectorAll(".banner-left-right-js");
Array.from(navsz).forEach(function (vnz,inavz) {
    vnz.onmouseover=function (e) {
        navzuo[inavz].style.display="block";
        navzuo[inavz].style.top=-31.19*inavz+"px";
        //e.stopPropagation();
    };
    vnz.onmouseout=function () {
        navzuo[inavz].style.display="none";
    }
});
/*ban1.onmouseover=function () {
    navzuo[inavz].style.display="block";
    navzuo[inavz].style.top=-31.19*inavz+"px";
};
ban1.onmouseout=function () {
    navzuo[inavz].style.display="none";
}*/

