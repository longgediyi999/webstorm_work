$(function() {

    //大轮播图
    //设定变量当计数器
    var k = 0;
    var timer = null;
    // 鼠标移上 nav导航 然后 让对应的list里面的li 加上样式   让其他的去掉样式
    $("#slide_point i").click(function(){
        k = $(this).index();
        fn();
    });

    timer = setInterval(auto,2000);
    function auto(){
        k++;
        if(k> $("#slide_point i").length-1) k= 0;
        fn();
    }
    // 封装了一个核心函数
    function fn() {
        $("#slide_point i").eq(k).addClass("active").siblings().removeClass("active");

        $("#ul li").eq(k).fadeIn(1000).siblings().fadeOut(1000);
    }
    // 移到盒子身上 让定时器停止
    $("#banner").mouseover(function(){
        clearInterval(timer);
    });
    //离开盒子以后 继续走
    $("#banner").mouseout(function(){
        timer = setInterval(auto,2000);
    });

    //navBar
    $(window).scroll(function(){

        if ($(this).scrollTop()>=600) {
            // 让navbar 添加固定类
            $("#navBar").addClass("fixed");
        } else {
            // 移除navbar的类样式
            $("#navBar").removeClass("fixed")
        }

    });

    //鼠标移上特效
    $("#classifyCateRight li").mouseenter(function(){
        $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
    })
    $("#today .today_body>div").mouseenter(function(){
        $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
    })
    $("#last .brand").mouseenter(function(){
        $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
    })
    $("#warm .brand").mouseenter(function(){
        $(this).fadeTo("slow", 0.66).fadeTo("slow",1);
    })
})


