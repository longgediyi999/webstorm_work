
//顶部左边地理位置确认事件




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
    if (k < 0) {
      k = 3;
    }
    $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
    $("#fbc_trigger_line").animate({
      left: 115 + k * 229
    }, 500);
  });

  $("#focus_banner_con > span").eq(1).click(function () {
    k++;
    if (k == 4) {
      k = 0;
    }
    $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
    $("#fbc_trigger_line").animate({
      left: 115 + k * 229
    }, 500);
  });

  dingshiqi();

  function dingshiqi() {
    timer = setInterval(function () {
      k++;
      if (k == 4) {
        k = 0;
      }
      $("#focus_banner_con_id>li").eq(k).fadeIn(500).siblings().fadeOut(500);
      $("#fbc_trigger_line").animate({
        left: 115 + k * 229
      }, 500);
    }, 4000);
  }

  //console.log($(".fbc-trigger-con>li").length);
  // console.log($(".fbc-trigger-con>li").eq(3));
  $("#focus_banner_con_id").mouseenter(function () {
    clearInterval(timer);
  });
  $("#focus_banner_con_id").mouseleave(function () {     //鼠标移动到大图上停止  移开继续运动
    dingshiqi();
  });
  $("#focus_banner_con > span").eq(1).mouseenter(function () {
    clearTimeout(timer);
  });
  $("#focus_banner_con > span").eq(0).mouseenter(function () {
    clearTimeout(timer);
  });

  $("#focus_banner_con > span").eq(1).mouseleave(function () {
    dingshiqi();
  });
  $("#focus_banner_con > span").eq(0).mouseleave(function () {
    dingshiqi();
  });



  for (var i = 0; i < $(".fbc-trigger-con>li").length; i++) {
    $(".fbc-trigger-con>li").eq(i).mouseenter(function () {
      clearInterval(timer);
      //console.log($(this).index());
      var dibiao = $(this).index();
      //console.log(k,typeof(k));
      var kk = (115 + dibiao * 229) + "px";

      $("#focus_banner_con_id>li").eq(dibiao).fadeIn(500).siblings().fadeOut(500);  //?  鼠标连续滚动之后图片连续滚动

      $("#fbc_trigger_line").animate({
        left: kk
      }, 100);
      k = dibiao;
    });

    $(".fbc-trigger-con>li").eq(i).mouseleave(function () {
      dingshiqi();
    });

  }
});



$(function () {
  
  //图片渐进渐出
  for (var i = 0; i < $(".index-rank-list img").length; i++) {
    $(".index-rank-list img").eq(i).mouseenter(function () {
      jianjinjianchu($(this));
    });
  }

  for (var i = 0; i < $(".index-new-sec-list li").length; i++) {
    $(".index-new-sec-list li").eq(i).mouseenter(function () {
      jianjinjianchu($(this));
    })
  }

  for (var i = 0; i < $(".index-new-third-con img").length; i++) {
    $(".index-new-third-con img").eq(i).mouseenter(function () {
      jianjinjianchu($(this));
    });
  }   // ?


  for (var i = 0; i < $(".today-new .hotSale-hover").length; i++) {
    $(".today-new .hotSale-hover").eq(i).mouseenter(function () {
      $(this).parent().children().eq(0).children().css("filter", "blur(9px)");          //图片模糊
      $(this).animate({
        opacity: 1     //图片背景变为1
      }, 200);
    });
  }

  for (var i = 0; i < $(".today-new .hotSale-hover").length; i++) {
    $(".today-new .hotSale-hover").eq(i).mouseleave(function () {
      $(this).parent().children().eq(0).children().css("filter", "blur(0px)");   //图片模糊恢复
      $(this).animate({
        opacity: 0
      }, 200);
    });
  }

  for (var i = 0; i < $(".wrap .brand-item").length; i++) {
    $(".wrap .brand-item").eq(i).mouseenter(function () {
      jianjinjianchu($(this));
    });
  }

  //图片渐进渐出的函数
  function jianjinjianchu(obj) {
    obj.animate({
      opacity: 0.7
    });
    setTimeout(function () {
      obj.animate({
        opacity: 1
      });
    }, 500);
  }

  //固定导航js
  for (var i = 1; i < $(".index-nav-list .index-nav-item").length; i++) {
    $(".index-nav-list .index-nav-item").eq(i).mouseenter(function () {
      $(this).css("color", "red");
      $(this).children().eq(0).css("color", "red");
    });
  }

  for (var i = 1; i < $(".index-nav-list .index-nav-item").length; i++) {
    $(".index-nav-list .index-nav-item").eq(i).mouseleave(function () {
      $(this).css("color", "");
      $(this).children().eq(0).css("color", "#949494");
    });
  }


  for (var i = 0; i < $(".index-nav-list").children().length; i++) {
    $(".index-nav-list a").eq(i).click(function () {
      for (var j = 0; j < $(".index-nav-list").children().length; j++) {
        $(".index-nav-list a").eq(j).removeClass("daohangbgc");
      }
      $(this).addClass("daohangbgc");
    });
  }
 /* var distance = 0;
  var step = 100;
  $(window).mousewheel(function (event, delta) {
    //console.log(event.pageY);
    if (delta < 0) {
      distance += step;
    }
    else {
      if (distance > 0)
        distance -= step;
    }
    scroll(0, distance);
    event.preventDefault();
    if (event.pageY > 1442) {
      $(".is-lift-nav-fixed").fadeIn(200);
    }
    if (event.pageY < 1442) {
      $(".is-lift-nav-fixed").fadeOut(200);
    }

  });*/


  function yichuhongse() {
    for(var i = 0; i <  $(".index-nav-list a").length; i++) {
      $(".index-nav-list a").eq(i).removeClass("daohangbgc");
    }
  }

  $(document).scroll(function () {
    if ($(document).scrollTop() > 1400 && $(document).scrollTop() <= 3000) {
      yichuhongse();
      $("#J-index-nav-hotSale").addClass("daohangbgc");
      $(".is-lift-nav-fixed").fadeIn(200);
    }
    if ($(document).scrollTop() > 3000 && $(document).scrollTop() <= 4600) {
      yichuhongse();
      $("#J-index-nav-floor1").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 4600 && $(document).scrollTop()<=6100){
      yichuhongse();
      $("#J-index-nav-floor2").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 6100 && $(document).scrollTop()<=7800){
      yichuhongse();
      $("#J-index-nav-floor3").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 7800 && $(document).scrollTop()<=9200){
      yichuhongse();
      $("#J-index-nav-floor4").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 9200 && $(document).scrollTop()<=10800){
      yichuhongse();
      $("#J-index-nav-floor5").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 10800 && $(document).scrollTop()<=12300){
      yichuhongse();
      $("#J-index-nav-floor6").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 12300 && $(document).scrollTop()<=13900){
      yichuhongse();
      $("#J-index-nav-floor7").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 13900 && $(document).scrollTop()<=15400){
      yichuhongse();
      $("#J-index-nav-floor8").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 15400 && $(document).scrollTop()<=16900){
      yichuhongse();
      $("#J-index-nav-floor9").addClass("daohangbgc");
    }if ($(document).scrollTop() > 16900 && $(document).scrollTop()<=18500){
      yichuhongse();
      $("#J-index-nav-floor10").addClass("daohangbgc");
    }
    if ($(document).scrollTop() > 18500){
      yichuhongse();
      $("#J-index-nav-floor11").addClass("daohangbgc");
    }
    if ($(document).scrollTop() < 1000){
      yichuhongse();
      $(".is-lift-nav-fixed").fadeOut(200);
    }

    console.log($(document).scrollTop());
  });


});

























