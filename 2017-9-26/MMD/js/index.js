$(function(){

    // 获取菜单栏动态数据
    $.ajax({
        url:url+"/api/getindexmenu",
        success:function(data){
            // 把数据渲染到页面
            // 通过模板引擎把得到的数据渲染到页面
            var html = template("getMenu",data);
            $(".row").html(html);
        }
    })


    // getList
    $.ajax({
        url:url+"/api/getmoneyctrl",
        success:function(data){
            var html = template("getList",data);
            $("#list").html(html);
        }
    })

})