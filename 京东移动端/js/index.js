/*最顶上方导航条控制*/

headerOpc();

function headerOpc() {
	//轮播图的高度
	var carouselHeight = document.querySelector(".carousel img").offsetHeight;
	//头部标签
	var header = document.querySelector("header");

	//最大透明度
	var maxOp = 0.8;

	//滚动条事件
	window.onscroll = function () {
		//获取页面被卷去的高度

		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		//实时的透明度
		var tmpOp = scrollTop / carouselHeight;

		//实时透明度与最大透明度做比较

		if (tmpOp > maxOp) {
			tmpOp = maxOp;
		}

		header.style.backgroundColor = "rgba(201, 21, 35, " + tmpOp + ")";

	}


};


/*倒计时*/
timeout();

function timeout() {
	//获取事件标签
	var spans = document.querySelectorAll(".daojishi span");
	//console.log(spans.length);

	//定义总时长
	var alltimer = 5 * 60 * 60;

	shijian();

	//定时器 自动减事件
	timer = setInterval(function () {
		//自减
		alltimer--;

		//如果自减到0  那么清除定时器
		if (alltimer == 0) {
			clearInterval(timer);
		}

		shijian();
	}, 1000);

	//求时间函数
	function shijian() {
		//小时
		var hour = parseInt(alltimer / 60 / 60);

		//分钟
		var minutes = parseInt(alltimer / 60 - hour * 60);

		//秒
		var secounds = parseInt(alltimer - minutes * 60 - hour * 60 * 60);


		//求时分秒
		var hour0 = parseInt(hour / 10);
		var hour1 = hour % 10;

		var minutes0 = parseInt(minutes / 10);
		var minutes1 = minutes % 10;

		var secounds0 = parseInt(secounds / 10);
		var secounds1 = secounds % 10;

		/*console.log(hour0,hour1,minutes0,minutes1,secounds0,secounds1);*/

		//设置span

		spans[0].innerHTML = hour0;
		spans[1].innerHTML = hour1;
		spans[3].innerHTML = minutes0;
		spans[4].innerHTML = minutes1;
		spans[6].innerHTML = secounds0;
		spans[7].innerHTML = secounds1;
	}

};


/*轮播图*/

jd_carousel();

function jd_carousel() {

	//定义索引
	var index = 1;

	//定义定时器
	var timer = null;

	//获取ul
	var carousel_ul = document.querySelector(".carousel_ul");
/*	console.log(carousel_ul);*/

	//轮播图的初始位置
	carousel_ul.style.transform = "translateX(-" + index + "0%)";

	//开启定时器

	var timed = goInterval();

	//添加监听事件
	carousel_ul.addEventListener("transitionend", function () {

		if(index >= 9) {
			index = 1;

			carousel_ul.style.transition = "none";
			carousel_ul.style.transform = "translateX(-"+index+"0%)";
		}else if (index <= 0) {
			index = 8;
			carousel_ul.style.transition = "none";
			carousel_ul.style.transform = "translateX(-" + index + "0%)";
		}

		var indexo = index -1;
		activeLi(indexo);

	});

	//手指滑动事件

	itcast(carousel_ul).swipe(function (d) {

		clearInterval(timed);

		switch (d) {
			case "left":
				index++;
				break;
			case "right":
				index--;
				break;
			default:
				break;
		}

		carousel_ul.style.transition = "transform .3s";

		carousel_ul.style.transform = "translateX(-"+index+"0%)"

		timed = goInterval();


	});



	//定义一个定时器轮播函数
	function goInterval() {
		return setInterval(function () {
			index++;

			carousel_ul.style.transition = "transform .3s";

			carousel_ul.style.transform = "translateX(-"+index+"0%)";

		},1000);
	};


	//索引器 排他
	function activeLi(tmpIndex) {
		var lis = document.querySelectorAll(".carousel_o li");
		for(var i = 0; i < lis.length ; i++) {
		    var li = lis[i];
			li.classList.remove("active");
		}
		lis[tmpIndex].classList.add("active");
	}


};





