$(function() {
    //设定变量当计数器
    var k = 0;
    var timer = null;
    // 鼠标移上 nav导航 然后 让对应的list里面的li 加上样式   让其他的去掉样式
    $("#slideshow_nav li").mouseover(function(){
        // 让当前的li 加上激活类  让它的其他兄弟们 去掉激活类
        $(this).addClass("active").siblings().removeClass("active");
        // 获取对应的索引 让后让list里面的对应索引的li显示出来 淡入 让别的元素淡出
        $("#slideshow_list li").eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
    });
    //给span添加左右效果
    $("#slideshow .slideshow_span1").click(function(){
        k--;
        if(k<0) {
            k = $("#slideshow_nav li").length-1;
        }
        yundongjianbian();
    })
    $("#slideshow .slideshow_span2").click(function(){
        k++;
        yundongjianbian();
    })
    function yundongjianbian(){
        if(k> $("#slideshow_nav li").length-1) {
            k = 0;
        }
        $("#slideshow_nav li").eq(k).addClass("active").siblings().removeClass("active");
        
        $("#slideshow_list li").eq(k).fadeIn(500).siblings().fadeOut(500);
    }
    function dingshi(){
        timer = setInterval(function(){
        k++;
        yundongjianbian();
        },2000)    
    }
    
    //给span添加动态效果
    $("#slideshow").mouseenter(function(){
        clearInterval(timer);
        timer=null;
        $("#slideshow span").animate({
            "width":"33px",
            "opacity":0.3
        },500);
        $("#slideshow span").mouseenter(function(){
            $("#slideshow span").animate({
            "opacity":0.8
        },200);
        })
        $("#slideshow span").mouseleave(function(){
            $("#slideshow span").animate({
            "opacity":0.3
        },200);
        })
    })
    $("#slideshow").mouseleave(function(){
        $("#slideshow  span").animate({
                "width":0,
                "opacity":0
            },500);
        dingshi();
    })
    
    //给 kid-push-list 添加精灵图背景
    for(var j=0;j<5;j++){
        $("#kid-push-list i").eq(j).css("background-position",-171*j+"px -154px");
        $("#kid-push-list b").eq(j).css("background-position",-171*j+"px 0px");
    }

    

//当点击年龄档案里的按钮进入注册界面
    $("#create_Birthday_input,#nickName_input,.wangzi,.gongzhu,.et,.create_bady_Btn,.sc").click(function(){
        $("#zhezaoceng").css("display","block");
        $("#dengluerror,#zhuceerror").text("");
        //给会员注册表格加上上边距离使其在屏幕中间
        var ttp = ($(window).height()-$("#huiyuanzhuce").height())/2; 
    　　var left = ($(window).width() - $("#huiyuanzhuce").width())/2; 
    　　var scrollTop = $(document).scrollTop(); 
    　　var scrollLeft = $(document).scrollLeft(); 
        console.log(ttp);
        console.log(left);
        console.log(scrollTop);
        console.log(scrollLeft);
    　　$("#huiyuanzhuce").css( {
        "top" : ttp + scrollTop, 
        "left" : left + scrollLeft 
        } ); 
    })
//当鼠标放在小公主 小王子 et身上时 按钮变色
    $(".wangzi,.gongzhu,.et").mouseenter(function(){
        $(this).css({"background-color":"#f10180","color":"white"});

    })
    $(".wangzi,.gongzhu,.et").mouseleave(function(){
        $(this).css({"background-color":"rgb(238,238,238)","color":""});
    })
//固定导航栏现身
    setInterval(function(){
        panduandaohang();
    },50)
    function panduandaohang(){
        if($(document).scrollTop()>=1000){
            $("#fix_nav").show();
        }else{
            $("#fix_nav").hide();
        }

    }   

//封装一闪就没函数封装
    function oneStar(obj){
        obj.mouseenter(function(){
            $(this).fadeTo(500,0.6).fadeTo(300,1)
        })      
    }
//商品内容动画
    
    oneStar($("#list_ul li"));//这个不用你写

    oneStar($("#main div img"));
    oneStar($(".main_content>.content_item img"));
    shoucang($("#main>div"));
    
    shoucang($(".main_content>.content_item"));

    //收藏品牌函数封装
    function shoucang(obj1){
        obj1.mouseenter(function(){
            $(this).find(".sc").show();
            $(this).find(".sc").mouseenter(function(){
                $(this).css({
                    "background-color":"rgb(241,5,130)",
                    "color":"white"
                })
                $(this).children(".sc>i").css("color","white")

            })
            $(this).find(".sc").mouseleave(function(){
                $(this).css({
                    "background-color":"white",
                    "color":""
                })
                $(this).children(".sc>i").css("color","")
            })

        })
        obj1.mouseleave(function(){
            $(this).find(".sc").hide();
        })
    }

//制作会员注册内容
    
    $("#frameTabLeft").click(function(){
        $(this).addClass("zhuce_color");
        $("#frameTabRight").removeClass("zhuce_color");        
        $("#frameContent2").hide();
        $("#frameContent1").show();
    })
    $("#frameTabRight").click(function(){
       
        $(this).addClass("zhuce_color");
        $("#frameTabLeft").removeClass("zhuce_color");        
        $("#frameContent1").hide();
        $("#frameContent2").show();
    })
    $("#closeFrame").click(function(){
        $("#zhezaoceng").hide();
    })
    
    $("#vip_name").blur(function(){
        if($("#vip_name").val()==""){
            $("#baocuo1").text("");
            $("#baocuo1").text("用户名不能为空");
            $("#vip_name").css("border","0.5px solid red")
        }else{
            $("#baocuo1").text("");
            $("#baocuo1").text("用户名不正确");
            $("#vip_name").css("border","0.5px solid red")
        }
    })
    $("#vip_password").blur(function(){
        if($("#vip_password").val()==""){
            $("#baocuo2").text("");
            $("#baocuo2").text("密码不能为空");
            $("#vip_password").css("border","0.5px solid red")
        }else{
            $("#baocuo2").text("");
            $("#baocuo2").text("密码不正确");
            $("#vip_password").css("border","0.5px solid red")
        }
    })
    $("#zhuce_name").blur(function(){
        if($("#zhuce_name").val()==""){
            $("#baocuo3").text("");
            $("#baocuo3").text("用户名不能为空");
            $("#zhuce_name").css("border","0.5px solid red")
        }else{
            $("#baocuo3").text("");
            $("#baocuo3").text("该用户名已被注册");
            $("#zhuce_name").css("border","0.5px solid red")
        }
    })
    $("#zhuce_password").blur(function(){
        if($("#zhuce_password").val()==""){
            $("#baocuo4").text("");
            $("#baocuo4").text("密码不能为空");
            $("#zhuce_password").css("border","0.5px solid red")
        }else{
            $("#baocuo4").text("");
            $("#baocuo4").text("密码不符合规则");
            $("#zhuce_password").css("border","0.5px solid red")
        }
    })
    $("#repeat_password").blur(function(){
        if($("#repeat_password").val()==""){
            $("#baocuo5").text("");
            $("#baocuo5").text("重复密码不能为空");
            $("#repeat_password").css("border","0.5px solid red")
        }else{
            $("#baocuo5").text("");
            $("#baocuo5").text("密码与上方不相同");
            $("#repeat_password").css("border","0.5px solid red")
        }
    })
    $("#yanzhengma").blur(function(){
        if($("#yanzhengma").val()==""){
            $("#baocuo6").text("");
            $("#baocuo6").text("验证码不能为空");
            $("#yanzhengma").css("border","0.5px solid red")
        }else{
            $("#baocuo6").text("");
            $("#baocuo6").text("验证码不正确");
            $("#yanzhengma").css("border","0.5px solid red")
        }
    })
    $("#vipLogin").click(function(){
        $("#dengluerror").text("请填写正确的信息!");
    })
    $("#lijizhuce").click(function(){
        $("#zhuceerror").text("请填写正确的信息!");
    })




        
        
    
    



})