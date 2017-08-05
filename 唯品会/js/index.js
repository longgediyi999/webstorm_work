var sel_area_d_id = document.getElementById("sel_area_d_id");
var sel_area_id = document.getElementById("sel_area_id");
var sel_area_div = document.getElementById("sel_area_div");
//顶部左边地理位置确认事件
sel_area_id.onmousemove = function () {
  sel_area_d_id.style.display = "block";
  sel_area_div.setAttribute("class", "sel-area-div sel-area-div-j");
}

sel_area_id.onmouseout = function () {
  sel_area_d_id.style.display = "none";
  sel_area_div.setAttribute("class", "sel-area-div");
}

var main_nav = document.getElementById("main_nav");
//鼠标滚动使导航栏固定事件
window.onscroll = function () {
  var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log(main_nav.scrollHeight);
  //console.log(scrollT);
  if (scrollT > 128) {
    main_nav.className = "main-nav main-nav-js";
  } else {
    main_nav.className = "main-nav";
  }
}

//中间大图小span渐进事件
var focus_banner_con = document.getElementById("focus_banner_con");
var focus_banner_con_span = focus_banner_con.getElementsByTagName("span");

var focus_banner_con_id = document.getElementById("focus_banner_con_id");

focus_banner_con_id.onmouseover = function () {
  focus_banner_con_span[0].style.left = 0;
  focus_banner_con_span[1].style.right = 0;
}

focus_banner_con_id.addEventListener('mouseover', function (ev) {
  focus_banner_con_span[0].style.left = 0;
  focus_banner_con_span[1].style.right = 0;
}, false);

focus_banner_con_id.addEventListener('mouseout', function (ev) {
  focus_banner_con_span[0].style.left = -33 + "px";
  focus_banner_con_span[1].style.right = -33 + "px";
}, false);

focus_banner_con_span[0].addEventListener("mouseover", function () {
  this.style.left = 0;
  focus_banner_con_span[1].style.right = 0;
  this.addEventListener("mouseout", function () {
    focus_banner_con_span[0].style.left = -33 + "px";
    focus_banner_con_span[1].style.right = -33 + "px";
  })
}, false);

focus_banner_con_span[1].addEventListener("mouseover", function () {
  focus_banner_con_span[0].style.left = 0;
  this.style.right = 0;
  this.addEventListener("mouseout", function () {
    focus_banner_con_span[0].style.left = -33 + "px";
    focus_banner_con_span[1].style.right = -33 + "px";
  })
}, false);


//底部运动+图片轮播函数+自动播放
$(function () {      
  var k = 0;
  var timer = null;
  $("#focus_banner_con > span").eq(0).click(function () {
    k--;
    if(k<0){
      k = 3;
    }
    $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
     $("#fbc_trigger_line").animate({
      left : 115+k*229
     },500);
  });
  $("#focus_banner_con > span").eq(1).click(function () {
    k++;
    if(k==4){
      k = 0;
    }
    $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
    $("#fbc_trigger_line").animate({
      left : 115+k*229
    },500);
  });
  dingshiqi();
  function dingshiqi() {
    timer = setInterval(function () {
      k++;
      if(k==4){
        k = 0;
      }
      $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
      $("#fbc_trigger_line").animate({
        left : 115+k*229
      },500);
    },5000);
  }

   //console.log($(".fbc-trigger-con>li").length);
    console.log($(".fbc-trigger-con>li").eq(3));

  for(var i = 0; i < $(".fbc-trigger-con>li").length ; i++) {
    $(".fbc-trigger-con>li").eq(i).mouseenter(function () {
      clearInterval(timer);
      //console.log($(this).index());
      var dibiao = $(this).index();
      //console.log(k,typeof(k));
      var kk=(115+dibiao*229)+"px";

      $("#focus_banner_con_id>li").eq(dibiao).fadeIn(500).siblings().fadeOut(500);  //?  鼠标连续滚动之后图片连续滚动

      $("#fbc_trigger_line").animate({
        left : kk
      },100);
      k = dibiao;
    });

    $(".fbc-trigger-con>li").eq(i).mouseleave(function () {
      dingshiqi();
    });
    
  }

  //图片渐进渐出
  console.log($(".index-rank-list img"));
  for(var i = 0; i < $(".index-rank-list img").length ; i++) {
    $(".index-rank-list img").eq(i).mouseenter(function () {
      jianjinjianchu($(this));
    });
  }


  //图片渐进渐出的函数
  function jianjinjianchu(obj) {
    obj.animate({
      opacity:0.5
    });
    setTimeout(function () {
      obj.animate({
        opacity:1
      });
    },500);
  }





});





















