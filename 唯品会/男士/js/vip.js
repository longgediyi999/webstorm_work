$(function() {

    //���ֲ�ͼ
    //�趨������������
    var k = 0;
    var timer = null;
    // ������� nav���� Ȼ�� �ö�Ӧ��list�����li ������ʽ   ��������ȥ����ʽ
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
    // ��װ��һ�����ĺ���
    function fn() {
        $("#slide_point i").eq(k).addClass("active").siblings().removeClass("active");

        $("#ul li").eq(k).fadeIn(1000).siblings().fadeOut(1000);
    }
    // �Ƶ��������� �ö�ʱ��ֹͣ
    $("#banner").mouseover(function(){
        clearInterval(timer);
    });
    //�뿪�����Ժ� ������
    $("#banner").mouseout(function(){
        timer = setInterval(auto,2000);
    });

    //navBar
    $(window).scroll(function(){

        if ($(this).scrollTop()>=600) {
            // ��navbar ��ӹ̶���
            $("#navBar").addClass("fixed");
        } else {
            // �Ƴ�navbar������ʽ
            $("#navBar").removeClass("fixed")
        }

    });

    //���������Ч
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


