//封装一闪就没函数封装
function oneStar(obj) {
    obj.mouseenter(function () {
        $(this).fadeTo(500, 0.6).fadeTo(300, 1)
    })
}

//商品内容动画
oneStar($("#main div img"));
oneStar($(".main_content>.content_item img"));
shoucang($("#main>div"));

shoucang($(".main_content>.content_item"));


//热门分类li动画
oneStar($(".right_top li img"));
oneStar($(".right_bottom li img"));

//收藏品牌函数封装
function shoucang(obj1) {
    obj1.mouseenter(function () {
        $(this).find(".sc").show();
        $(this).find(".sc").mouseenter(function () {
            $(this).css({
                "background-color": "rgb(241,5,130)",
                "color": "white"
            })
            $(this).children(".sc>i").css("color", "white")

        })
        $(this).find(".sc").mouseleave(function () {
            $(this).css({
                "background-color": "white",
                "color": ""
            })
            $(this).children(".sc>i").css("color", "")
        })

    })
    obj1.mouseleave(function () {
        $(this).find(".sc").hide();
    })
}

//轮播图
$(function () {
    var k = 1;   //计数器
    //($("#u_top li").eq(0))

    $("#top_l").click(function () {
        k--;

        var kk = k * (-1304) + "px";

        for (var i = 0; i < $("#circle li").length; i++) {
            $("#circle li").eq(i).css("background-color", "black");
        }

        if (k == 0) {
            $("#circle li").eq(k + 2).css("background-color", "#ccc");
        } else {
            $("#circle li").eq(k - 1).css("background-color", "#ccc");
        }


        $("#u_top").animate({
            left: kk
        }, 400, function () {
            if (k <= 0) {
                k = 3;
                $("#u_top").css("left", (-1304) * 3);
            }
        });
    });

    $("#top_r").click(function () {

        k++;

        var kk = k * (-1304) + "px";

        for (var i = 0; i < $("#circle li").length; i++) {
            $("#circle li").eq(i).css("background-color", "black");
        }

        if (k == 4) {
            $("#circle li").eq(k - 4).css("background-color", "#ccc");
        } else {
            $("#circle li").eq(k - 1).css("background-color", "#ccc");
        }


        $("#u_top").animate({
            left: kk
        }, 400, function () {
            if (k >= 4) {
                k = 1;
                $("#u_top").css("left", -1304);
            }
        });

    });

    $("#circle li").mouseenter(function () {
      $(this).css("background","#ccc").siblings().css("background","black");
        var lala = $(this).index()*(-1304)-1304;
        k = $(this).index()+1;
        $("#u_top").animate({
            left : lala
        },400);
    })




});

//鼠标放上小三角出没
$("#u_box").mouseenter(function () {
    $("#sanJiao span").animate({opacity: 0.3}, 500);
});

$("#sanJiao span").mouseenter(function () {
    $(this).css("opacity","0.6");
});

$("#sanJiao span").mouseleave(function () {
    $(this).css("opacity","0.3");
});

$("#u_box").mouseleave(function () {
    $("#sanJiao span").animate({opacity: 0}, 500);

});

//热门分类左边li
$(function () {
    /*  for (var i = 0; i<$("#left1 li").length; i++) {
     $("#left1 li").css("backgroundColor","#fafafa");
     }*/
    $("#left1 li").mouseenter(function () {
        $(this).children().css("display", "block");
        $(this).children().animate({left: 110}, 200).siblings().css({left: 100}, {display: "none"});
        for (var i = 0; i < $("#left1 li").length; i++) {
            /*if($("#left1 li").eq(i).css("backgroundColor")=="rgb(250, 250, 250)")*/
            $("#left1 li").eq(i).css("backgroundColor", "#f4f4f4");
        }
        $(this).css("backgroundColor", "#fafafa")
    });
    $("#left1 li").mouseleave(function () {
        $(this).children().css("display", "none");
        $(this).children().animate({left: 100}, 100);
        $(this).css("backgroundColor", "#f4f4f4");
    });

    //左边移动右边跟着变
    $("#left1 li").click(function () {
        var index  = $(this).index();

        $("#pic_right div").eq(index).show().siblings().hide();

        $(this).css("backgroundColor", "white").siblings().css("backgroundColor", "#f4f4f4");
    });


});

