/**
 * Created by Administrator on 2017/8/7.
 */
$(function () {
    //var k = 0;
    //var timer = null;
    //timer = setInterval(function () {
    //
    //},2000)
    //$(".classify-cate-tab0").mouseenter(function () {
    //    $(".classify-cate-current").stop().animate({"top":"-1px"});
    //    $("#classifyCateRightCon").stop().animate({"margin-top":"0px"})
    //})
    //$(".classify-cate-tab1").mouseenter(function () {
    //    $(".classify-cate-current").stop().animate({"top":"81px"});
    //    $("#classifyCateRightCon").stop().animate({"margin-top":"-328px"})
    //})
    //$(".classify-cate-tab2").mouseenter(function () {
    //    $(".classify-cate-current").stop().animate({"top":"164px"});
    //    $("#classifyCateRightCon").stop().animate({"margin-top":"-656px"})
    //})
    //$(".classify-cate-tab3").mouseenter(function () {
    //    $(".classify-cate-current").stop().animate({"top":"245px"});
    //    $("#classifyCateRightCon").stop().animate({"margin-top":"-984px"})
    //})


    var k =3;
    var timer = null;
    // 鼠标移上 nav导航 然后 让对应的list里面的li 加上样式   让其他的去掉样式
    $(".classify-cate-tab-list li").mouseenter(function () {
        k = $(this).index();
        fn();
    });

    timer = setInterval(auto, 2000);
    function auto() {
        k++;
        if (k >3) k = 0;

        fn();
    }

    // 封装了一个核心函数
    function fn() {
        var topVal = 82*k-1;
        var mtopVal = -328*k;
        $(".classify-cate-current").stop().animate({"top": topVal+"px"});
        $("#classifyCateRightCon").stop().animate({"margin-top": mtopVal+"px"});
        //switch(k){
        //    case 0: $(".classify-cate-current").stop().animate({"top":"-1px"});
        //        $("#classifyCateRightCon").stop().animate({"margin-top":"0px"});
        //        break;
        //    case 1: $(".classify-cate-current").stop().animate({"top":"81px"});
        //        $("#classifyCateRightCon").stop().animate({"margin-top":"-328px"});
        //        break;
        //    case 2: $(".classify-cate-current").stop().animate({"top":"164px"});
        //        $("#classifyCateRightCon").stop().animate({"margin-top":"-656px"});
        //        break;
        //    case 3: $(".classify-cate-current").stop().animate({"top":"245px"});
        //        $("#classifyCateRightCon").stop().animate({"margin-top":"-984px"});
        //        break;
        //
        //}
    }

    // 移到盒子身上 让定时器停止
    jQuery(".classify-cate-inner").mouseenter(function () {
        clearInterval(timer);
    });
    //离开盒子以后 继续走
    jQuery(".classify-cate-inner").mouseleave(function () {
        timer = setInterval(auto, 2500);
    })

});