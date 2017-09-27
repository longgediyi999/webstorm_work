$(function(){
    
        // console.log(GetQueryString("categoryid"))
        var categoryid = GetQueryString("categoryid");      //0123

        // 获取对应标签名，并渲染到页面中（后期代码有问题）
        // var category = GetQueryString("category");      //电视/影院/空调
        // $(".nav_tv").html(category);


        // 发起ajax请求，把数据替换到导航最后一项
        $.ajax({
            url:url+"/api/getcategorybyid?categoryid="+categoryid,
            success:function(data){
                // console.log(data);
                // console.log(data.result);
                // console.log(data.result[0]);
                // console.log(data.result[0].category);
                $(".nav_tv").html(data.result[0].category);
            }
        })


        // 动态获取列表信息页并把页数展示出来
        var pageid = parseInt(GetQueryString("pageid"));      //当前页数
        
        $.ajax({
            url:url+"/api/getproductlist",
            data:{
                categoryid:categoryid,
                pageid:pageid || 1
            },
            success:function(data){
                // console.log(data);
                // 动态获取商品列表数据并渲染
                var html = template("getMenuList",data);
                $(".product_list").html(html);
                // 渲染页数(列表总数和每页展示多少数据)
                var pagesize = data.pagesize;           //10
                var totalCount = data.totalCount;       //30

                var page = parseInt(Math.ceil(totalCount/pagesize));       // 3
                var option = "";
                for(var i = 0; i < page; i++){
                    //i 012  i+1   123
                     // <option value="1">1</option>
                    // option+='<option value="'+(i+1)+'">'+(i+1)+'</option>'
                   if((i+1) == pageid){
                        option+='<option selected value="'+(i+1)+'">'+(i+1)+'</option>'
                   }else{
                        option+='<option value="'+(i+1)+'">'+(i+1)+'</option>'
                   }
                   
    
                }
                // 把拼接好的标签渲染到页面中
                $(".select select").html(option);

                // 根据选中页码进行跳转功能
                $(".select select").on("change",function(){
                    // console.log($(this).val())
                    // ./list.html?categoryid=categoryid&pageid=$(this).val()
                    window.location.href = "./list.html?categoryid="+categoryid+"&pageid="+$(this).val();
                })
                // // 问题：页码会变。。。待写
                 // 上下页跳转
                 var prevURL = "./list.html?categoryid="+categoryid+"&pageid="+ (pageid-1);
                 var nextURL = "./list.html?categoryid="+categoryid+"&pageid="+ (pageid+1);
                 
                 if(pageid == 1){
                     prevURL = "./list.html?categoryid="+categoryid+"&pageid=1";
                 }
                 
                 if(pageid == page){
                     nextURL = "./list.html?categoryid="+categoryid+"&pageid="+page;   
                 }
 
                 // 点击上下页按钮跳转
                 $(".prev > a").attr("href",prevURL);
                 $(".next > a").attr("href",nextURL);

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