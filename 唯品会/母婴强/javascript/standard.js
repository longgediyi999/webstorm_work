//��������JS����
<!--����ѡ�����ز���-->
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
<!--���¼���ز���-->
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
<!--�������ز���-->
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
<!--��Ա���ֲ����ز���-->
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
<!--�ͻ��������ز���-->
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
<!--�ֻ����ز���-->
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
<!--����ѡ�����ز���-->
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
//���²���ʹ��JQuery
$(function(){
    //����ѡ�񲿷�
    console.log($("#area a"));

    $("#area a").mouseenter(function () {
      var ds = $(this).css('backgroundColor');

      $("#area a").css("color", "#666a73");  //������е���ɫ

      for(var i = 0; i < $("#area a").length ; i++) {
        if($("#area a").eq(i).css('backgroundColor')=="rgb(241, 3, 127)"){
          $("#area a").eq(i).css({
            "color": "white"
          });
        }
      }

      $(this).css("color", "#f1037f");   //���õ�ǰ��ɫΪ��ɫ
      
      if(ds=="rgb(241, 3, 127)"){
        $(this).css({
          "color": "white"
        });
      }

  });

  $("#area a").mouseleave(function () {
    
  });

  $("#area a").click(function () {

    $("#area a").css({
      "backgroundColor": "white",
      "color": "#666a73"
    });

    $(this).css({
      "backgroundColor": "#f1037f",
      "color": "white"
    });
    $(".area>span").html($(this).text());

  });

    //��¼���֡��������֡���Ա���ֲ����֡��ͻ����񲿷֡��ֻ����֡����ಿ��
    $(".onloadf a,.discountf a,.clubf a,.servicef a,.phonef a,.moref a").mouseenter(function(){
        $(this).css("color","#f1037f").siblings().css("color","#666a73");
    });
    $(".onloadf a,.discountf a,.clubf a,.servicef a,.phonef a,.moref a").mouseout(function(){
        $(this).css("color","#666a73");
    });
    //���������
    //�˺Ų���
    //$("#account").mouseover(function(){
    //    alert(123);
    //    $(this).css({
    //        "cursor":"pointer",
    //        "backgroundColor":"#f1037f"
    //    }).children("#accountHide").fadein(100);
    //});
    //$("#account").mouseleave(function(){
    //    $(this).css({
    //        "backgroundColor":"#262626"
    //    }).children("#accountHide").fadeout(100);
    //});
    //�������������
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
    //��Ҫ�ĵ���
    $("#mianNavContent>ul>li,#classify,#notice").mouseover(function () {
            $(this).css("backgroundColor", "#db0a76").siblings().css("background", "#f10180");
    });
    $("#mianNavContent>ul>li,#classify,#notice").mouseout(function () {
        $(this).css("backgroundColor", "#f10180");
    });
    $("#topMore").mouseover(function(){
        $(this).css("cursor","pointer");
        $("#topMoreHide").show();
        $("#topMores").removeClass("selectedm").addClass("selectedmc")
    });
    $("#topMore").mouseout(function(){
        $("#topMoreHide").hide();
        $("#topMores").removeClass("selectedmc").addClass("selectedm");
    });
    //��������ض�������
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
    //���������
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
    //�Ż�ȯ����  Ʒ�Ʋ���   ��Ʒ���� �ҵ��㼣
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
    //��Ա����   ���ض�������
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



    //LOGO����
    //logo���������
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
    //��Ҫ�ĵ���
    $("#mianNavContent>ul>li,#classify,#notice").mouseover(function () {
            $(this).css("backgroundColor", "#db0a76").siblings().css("background", "#f10180");
    });
    $("#mianNavContent>ul>li,#classify,#notice").mouseout(function () {
        $(this).css("backgroundColor", "#f10180");
    });
});

