$(function(){
    var productId = GetQueryString("productId");
    // console.log(productId);

    // d动态获取商品信息
    $.ajax({
        url:url+"/api/getproduct?productid="+productId,
        success:function(data){
            // console.log(data);
            // console.log(data.result[0].productName.split(" ")[0])
            $(".nav_tv").html(data.result[0].productName.split(" ")[0]);
            var html = template("getDetails",data);
            $(".shop").html(html);
        }
    })


    // 动态获取评论信息
    $.ajax({
        url:url+"/api/getproductcom?productid="+productId,
        success:function(data){
            // console.log(data);
            var html = template("getPl",data);
            $(".comment ul").html(html);
        }
    })
})

    
    // js获取地址栏参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
       //  if(r!=null)return  decodeURI(r[2]); return null;
   }
