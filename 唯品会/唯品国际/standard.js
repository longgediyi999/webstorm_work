//导航栏的JS部分
<!--地区选择隐藏部分-->
var oArea = document.getElementsByClassName("area")[0];
var oSelecteda = oArea.getElementsByClassName("selected")[0];
var oAreaSelected = document.getElementsByClassName("areaSelected")[0];
oArea.onmouseover = function () {
    oArea.className = "area fl hidden";
    oSelecteda.className = "selected fr selectedc";
    oAreaSelected.style.display = "block";
    oArea.style.cursor = "pointer";
};
oArea.onmouseout = function () {
    oArea.className = "area fl";
    oSelecteda.className = "selected fr selecteda";
    oAreaSelected.style.display = "none";
};
<!--请登录隐藏部分-->
var aOnLoadf = document.getElementsByClassName("onloadf")[0];
var aOnload = document.getElementsByClassName("onload")[0];
aOnLoadf.onmouseover = function () {
    aOnLoadf.className = "onloadf hidden";
    aOnload.style.display = "block";
};
aOnLoadf.onmouseout = function () {
   aOnLoadf.className = "onloadf";
    aOnload.style.display = "none";
};
<!--特卖隐藏部分-->
var oDiscountf = document.getElementsByClassName("discountf")[0];
var oSelectedd = oDiscountf.getElementsByClassName("selected")[0];
var oDiscount = document.getElementsByClassName("discount")[0];
oDiscountf.onmouseover = function () {
    oDiscountf.className = "discountf hidden";
    oSelectedd.className = "selected fr selectedc";
    oDiscount.style.display = "block";
};
oDiscountf.onmouseout = function () {
    oDiscountf.className = "discountf";
    oSelectedd.className = "selected fr selectedb";
    oDiscount.style.display = "none";
};
<!--会员俱乐部隐藏部分-->
var oClubf = document.getElementsByClassName("clubf")[0];
var oSelectedc = oClubf.getElementsByClassName("selected")[0];
var oClub = document.getElementsByClassName("club")[0];
oClubf.onmouseover = function () {
    oClubf.className = "clubf hidden";
    oSelectedc.className = "selected fr selectedc";
    oClub.style.display = "block";
};
oClubf.onmouseout = function () {
    oClubf.className = "clubf";
    oSelectedc.className = "selected fr selectedb";
    oClub.style.display = "none";
};
<!--客户服务隐藏部分-->
var oServicef = document.getElementsByClassName("servicef")[0];
var oSelecteds = oServicef.getElementsByClassName("selected")[0];
var oService = document.getElementsByClassName("service")[0];
oServicef.onmouseover = function () {
    oServicef.className = "servicef hidden";
    oSelecteds.className = "selected fr selectedc";
    oService.style.display = "block";
};
oServicef.onmouseout = function () {
    oServicef.className = "servicef";
    oSelecteds.className = "selected fr selectedb";
    oService.style.display = "none";
};
<!--手机隐藏部分-->
var oPhonef = document.getElementsByClassName("phonef")[0];
var oPhone = document.getElementsByClassName("phone")[0];
oPhonef.onmouseover = function () {
    oPhonef.className = "phonef hidden";
    oPhone.style.display = "block";
};
oPhonef.onmouseout = function () {
    oPhonef.className = "phonef";
    oPhone.style.display = "none";
};
<!--更多选择隐藏部分-->
var oMoref = document.getElementsByClassName("moref")[0];
var oSelectedm = oMoref.getElementsByClassName("selected")[0];
var oMore = document.getElementsByClassName("more")[0];
oMoref.onmouseover = function () {
    oMoref.className = "moref hidden";
    oSelectedm.className = "selected fr selectedc";
    oMore.style.display = "block";
};
oMoref.onmouseout = function () {
    oMoref.className = "moref";
    oSelectedm.className = "selected fr selectedb";
    oMore.style.display = "none";
};




//以下部分使用JQuery
$(function(){
    //地区选择部分
    $("#area>li>a").mouseover(function () {
        $(this).css("color", "#f1037f").siblings().css("color", "#666a73");
        $(this).parent().siblings().find("a").css("color", "#666a73");
    });
    $("#area>li>a").mouseout(function () {
        $(this).css("color", "#666a73");
    });
    $("#area>li>a").click(function(){
        $(this).css({
            "backgroundColor": "#f1037f",
            "color": "white"
        }).siblings().css({
            "backgroundColor": "white",
            "color": "#666a73"
        });
        $(this).parent().siblings().find("a").css({
            "backgroundColor": "white",
            "color": "#666a73"
        });
        //=======================================
        $(".area>span").html($(this).text());
    });
    //登录部分、特卖部分、会员俱乐部部分、客户服务部分、手机部分、更多部分
    $(".onloadf a,.discountf a,.clubf a,.servicef a,.phonef a,.moref a").mouseenter(function(){
        $(this).css("color","#f1037f").siblings().css("color","#666a73");
    });
    $(".onloadf a,.discountf a,.clubf a,.servicef a,.phonef a,.moref a").mouseout(function(){
        $(this).css("color","#666a73");
    });







    //侧边栏部分
    //账号部分
    $("#account").mouseenter(function(){
        $(this).css({
            "cursor":"pointer",
            "backgroundColor":"#f1037f"
        }).children("#accountHide").stop().animate({
            right:"36",
        });
    });
    $("#account").mouseleave(function(){
        $(this).css({
            "cursor":"pointer",
            "backgroundColor":"#262626"
        }).children("#accountHide").stop().animate({
            right:"-275",
        });
    });
    $("#button").click(function(){
        $(this).css("cursor","pointer");
        $("#accountHide").stop().animate({
            right:"-275",
        });
    })
    $("#myNews").mouseenter(function(){
        $(this).children("a").css("color","#f1037f").siblings().find("i").css("color","#f1037f");
    });
    $("#myNews").mouseleave(function(){
        $(this).children("a").css("color","#c4c4c4").siblings().find("i").css("color","#c4c4c4");
    });
    $("#myOrder").mouseenter(function(){
        $(this).children("a").css("color","#f1037f").siblings().find("i").css("color","#f1037f");
    });
    $("#myOrder").mouseleave(function(){
        $(this).children("a").css("color","#c4c4c4").siblings().find("i").css("color","#c4c4c4");
    });
    //购物袋部分
    $("#shopping").mouseenter(function () {
        $("#shoppingHide").stop().animate({
            right: "36",
        });
    });
    $("#shopping").mouseleave(function () {
        $("#shoppingHide").stop().animate({
            right: "-275",
        });
    });
    $("#shoppingHide>.button").click(function () {
        $("#shoppingHide").stop().animate({
            right: "-275",
        });
    });
    //优惠券部分  品牌部分   商品部分 我的足迹
    $("#coupon,#brand,#commodity,#footmark").mouseenter(function () {
        $(this).css({
            "cursor": "pointer",
            "backgroundColor": "#f1037f"
        });
        $(this).children("div:eq(0)").stop().animate({
            right: "36",
        });
    });
    $("#coupon,#brand,#commodity,#footmark").click(function () {
        $(this).children("div:eq(1)").stop().animate({
            right: "36",
        });
    });
    $("#coupon,#brand,#commodity,#footmark").mouseleave(function () {
        $(this).css({
            "cursor": "auto",
            "backgroundColor": "#262626"
        });
        $(this).children("div:eq(0)").stop().animate({
            right: "-117",
        });
        $(this).children("div:eq(1)").stop().animate({
            right: "-275",
        });
    });
    //会员反馈   返回顶部部分
    $("#vipTicklingfarther,#backTop").mouseenter(function () {
        $(this).css({
            "cursor": "pointer",
            "backgroundColor": "#f1037f"
        });
        $(this).children("div:eq(0)").stop().animate({
            right: "36",
        });
    });
    $("#vipTicklingfarther,#backTop").mouseleave(function () {
        $(this).css({
            "cursor": "auto",
            "backgroundColor": "#262626"
        });
        $(this).children("div:eq(0)").stop().animate({
            right: "-117",
        });
    });



    //LOGO部分
    //logo购物袋部分
    $("#myTopShoppingBags").mouseover(function(){
        $(this).css({
            "borderColor":"#ccc",
            "cursor":"pointer",
        });
        $("#bagsWord").css("color","#f1037f")
        $("#myTopShoppingBagsHide").show();
    });
    $("#myTopShoppingBags").mouseout(function(){
        $(this).css({
            "borderColor":"#fff",
        });
        $("#bagsWord").css("color","#666a73")
        $("#myTopShoppingBagsHide").hide();
    });
    //主要的导航
    $("#mianNavContent>ul>li,#classify,#notice").mouseover(function () {
            $(this).css("backgroundColor", "#db0a76").siblings().css("background", "#f10180");
    });
    $("#mianNavContent>ul>li,#classify,#notice").mouseout(function () {
        $(this).css("backgroundColor", "#f10180");
    });
    //主要的导航
    //主要的导航里的更多部分
    $("#topMore").mouseover(function(){
        $(this).css("cursor","pointer");
        $("#topMoreHide").show();
        $("#topMores").removeClass("selectedm").addClass("selectedmc")
    });
    $("#topMore").mouseout(function(){
        $("#topMoreHide").hide();
        $("#topMores").removeClass("selectedmc").addClass("selectedm");
    });
});






//唯品国际大图部分
$("#vipInternational").mouseenter(function(){
    //$("#vipWord").text("招商来咯")
    $("#vipInternational img").fadeTo("slow",1);
})




//全球各地区部分
$("#global img").mouseenter(function(){
    $(this).fadeTo("slow", 0.6);
})
$("#global img").mouseleave(function(){
    $(this).fadeTo("slow", 1);
})
//热门话题部分


//爆品推荐部分
//轮播图部分
$("#best").mouseenter(function(){
    $("#bestLeft").animate({
        left: 0, opacity: '1'
    }, 500);
    $("#bestRight").animate({
        right: 0, opacity: '1'
    }, 500);


    var i = 1;
    var len = -1035;
    $("#bestLeft").click(function(){
        i--;
        var l = i*len + "px";
        $("#best ul").stop().animate({"left":l},500,function(){
            if (i== 0){
                i=1;
                $("#best ul").css("left,-1035");
            }
        })
    });


    $("#bestRight").click(function(){
        i++;
        var k = i*len + "px";
        $("#best ul").stop().animate({"left":k},500,function(){
            if (i == 3){
                i= 0;
               $("#best ul").css("left",-1035);
            }
        })

    });
});
$("#best").mouseleave(function(){
    $("#bestLeft").animate({
        left: 10, opacity: '0'
    }, 500);
    $("#bestRight").animate({
        right: 10, opacity: '0'
    }, 500);
});





$("#best li").mouseenter(function(){
    $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
})

//美容彩妆部分
//美容彩妆导航部分
$("#cosmeticsNav").find("li:even").mouseenter(function(){
    //console.log($("#cosmeticsNav").find("li:odd"));
    $(this).find("a").css("color","#e2367e").parent().siblings().find("a").css("color","#a99db5");
});
$("#cosmeticsNav").find("li:even").mouseleave(function(){
    //console.log($("#cosmeticsNav").find("li:odd"));
    $(this).find("a").css("color","#a99db5");
});
$("#cometicsMore").mouseenter(function(){
    $(this).css("color","#e2367e");
});
$("#cometicsMore").mouseleave(function(){
    //console.log($("#cosmeticsNav").find("li:odd"));
    $(this).css("color","#a99db5");
});
//美容彩妆内容部分
//美容彩妆内容左边部分
//顶部
$("#coscLeftTop div").mouseenter(function(){
    $(this).css("cursor","pointer").find("button").css({
        "background-color":"#ff7a88",
        "color":"white"
    });
});
$("#coscLeftTop div").mouseleave(function(){
    $(this).css("cursor","auto").find("button").css({
        "background-color":"#fff",
        "color":"#333"
    });
});
//底部
$("#coscLeftBottom").mouseenter(function(){

    $("#coscLeftButton").animate({
        left: 0, opacity: '1'
    }, 500);
    $("#coscRightButton").animate({
        right: 0, opacity: '1'
    }, 500);


    var i = 1;
    var len = -876;
    $("#coscLeftButton").click(function(){
        i--;
        var l = i*len + "px";
        $("#coscLeftBottom ul").stop().animate({"left":l},500,function(){
            if (i== 0){
                i=1;
                $("#coscLeftBottom ul").css("left,-876");
            }
        })
    });


    $("#coscRightButton").click(function(){
        i++;
        var k = i*len + "px";
        $("#coscLeftBottom ul").stop().animate({"left":k},500,function(){
            if (i == 3){
                i= 0;
                $("#coscLeftBottom ul").css("left",-876);
            }
        })

    });
});



$("#coscLeftBottomt").mouseleave(function(){
    $("#coscLeftButton").animate({
        left: 10, opacity: '0'
    }, 500);
    $("#coscRightButton").animate({
        right: 10, opacity: '0'
    }, 500);
});













$("#coscLeftBottom li").mouseenter(function(){
    $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
})

//美容彩妆内容右边部分
$("#coscRight li").mouseenter(function(){
   $(this).find("img").css("borderColor","#888888").siblings("span").css("color","#e2367e")
       .parents("li").siblings().find("img").css("borderColor","#f3f3f3").siblings("span").css("color","#999");
});
$("#coscRight li").mouseleave(function(){
    $(this).find("img").css("borderColor","#f3f3f3").siblings("span").css("color","#999");
});




//热销专场内容部分
$("#hotSellContentA a").mouseenter(function(){
    $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
})


//即将推出部分
$("#comingContent li").mouseenter(function(){
    $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
})