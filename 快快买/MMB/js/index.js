$(function(){

    // 获取menu菜单数据
    $.ajax({
        url:url+"/api/getindexmenu",
        success:function(data){
            // console.log(data);
            var html = template("getMenu",data);
            $("#menu .row").html(html);
        }
    })


    $.ajax({
        url:url + "/api/getmoneyctrl",
        success:function(data){
            // console.log(data)
            var html = template("getMedia",data);
            $("#list").html(html);
        }
    })

})