/**
 * Created by qiangxl on 2017/8/22.
 */

/*
 1.拖动li标签实现拖动
 2. 弹簧效果
 3. 点击li标签菜单当前菜单置顶
 */

your_scroll();


	//获取元素

function your_scroll() {
	var l_menu = document.querySelector(".l_menu");

	//按下的坐标
	var startY;


	//记录移动的距离, 以后只要移动了 就给他赋值
	var preDistance = 0;

	//弹簧
	var springs = 50;

	//最大上滑 上滑距离是负数
	var maxUp = -(l_menu.offsetHeight - l_menu.parentNode.offsetHeight);

	//添加按下移动事件
	l_menu.addEventListener("touchstart", function (e) {
		//判断是几根手指按下
		if (e.targetTouches.length > 1) {
			return;
		}

		l_menu.style.transition = "none";
		//记录坐标
		startY = e.targetTouches[0].clientY;
		
	});

	//手指移动
	l_menu.addEventListener("touchmove", function (e) {
		//判断是几根手指按下
		if(e.targetTouches.length >1 ){
			return;
		}

		var moveY = e.targetTouches[0].clientY;

		var moveDis = moveY-startY + preDistance;


		//判断下拉距离
		if(moveDis > springs) {
			moveDis = springs;
		}else if(moveDis < maxUp - springs){
			//谁的值 越小 谁越在上面
			moveDis = maxUp - springs;
		}



		l_menu.style.transform = "translateY("+moveDis+"px)";
	});

	l_menu.addEventListener("touchend", function (e) {
		if(e.changedTouches.length > 1){
			return;
		}

		var moveEndY = e.changedTouches[0].clientY;
		preDistance = moveEndY - startY +preDistance;


		if(preDistance>0) {
			preDistance = 0;
			l_menu.style.transition = "transform 1s ";
			l_menu.style.transform = "translateY("+ preDistance+"px)";
		} else if(preDistance < maxUp) {
			preDistance = maxUp;

			l_menu.style.transition = "transform 1s";
			l_menu.style.transform = "translateY("+preDistance+"px)";
		}

	});





	//点击事件
	itcast(l_menu).tap(function (e) {
		//获取目标li标签
		var targetLi = e.target;

		//获取所有的li标签
		var lis = document.querySelectorAll(".l_menu>li");

		var index;

		for(var i = 0; i < lis.length ; i++) {
		    var li = lis[i];
			li.classList.remove("active");
			if(li === targetLi) {
				index = i;
				li.classList.add("active");
			}
		}

		//点击置顶的告诉 负数
		var tapTopHeight = -index * targetLi.offsetHeight;

		//判断是否超出最大的上滑距离
		if(tapTopHeight<maxUp){
			tapTopHeight = maxUp;
		}

		preDistance = tapTopHeight;
		l_menu.style.transition = "transform .3s";
		l_menu.style.transform = "translateY(" + tapTopHeight + "px)";


	});















}


