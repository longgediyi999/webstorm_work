$(function(){

    // 动态获取li标签内具体内容
    $.ajax({
        // url 等于 http://182.254.146.100:3000
        url:url+"/api/getcategorytitle",
        success:function(data){
            // console.log(data);
            var html = template("getList_list",data);
            $(".creatList_ul").html(html);
        }
    })


    $(".creatList_ul").on("click","li>a",function(){
            var that = $(this);
            // console.log(that)
            var title = that.attr("data_title_id");
         // 动态获取li标签内ul具体内容
         $.ajax({
            url:url+"/api/getcategory?titleid="+title,
            success:function(data){
                var html = template("getList_ul",data);
                // 渲染的是所有li>ul（错的）
                // $(".creatList_ul>li>ul").html(html);
                // console.log(that)
                that.siblings("ul").html(html);
                that.siblings("ul").toggle();
                that.parent().siblings("li").find("ul").slideUp();
            }
        })
        // that.siblings("ul").toggle();
        // that.parent().siblings("li").find("ul").slideUp();

    })
   

      
    
   

})