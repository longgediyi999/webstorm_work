$(function () {
    $.ajax({
        url:url+'/api/getindexmenu',
        success: function (data) {
            var html = template("getMenu",data);
            $("body").html(html);
        }
    })

    $.ajax({
        url:url+'/api/getmoneyctrl',
        success: function (data) {

        }
    })

})