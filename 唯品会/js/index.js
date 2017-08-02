var sel_area_d_id = document.getElementById("sel_area_d_id");
var sel_area_id = document.getElementById("sel_area_id");
var sel_area_div = document.getElementById("sel_area_div");
//顶部左边地理位置确认事件
sel_area_id.onmousemove = function () {
  sel_area_d_id.style.display = "block";
  sel_area_div.setAttribute("class", "sel-area-div sel-area-div-j");
}

sel_area_id.onmouseout = function () {
  sel_area_d_id.style.display = "none";
  sel_area_div.setAttribute("class", "sel-area-div");
}

var main_nav = document.getElementById("main_nav");
//鼠标滚动使导航栏固定事件
window.onscroll = function() {
  var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log(main_nav.scrollHeight);
  //console.log(scrollT);
  if(scrollT>128){
    main_nav.className = "main-nav main-nav-js";
  }else {
    main_nav.className = "main-nav";
  }
}

//中间大图小span渐进事件
var focus_banner_con = document.getElementById("focus_banner_con");
var focus_banner_con_span = focus_banner_con.getElementsByTagName("span");

var focus_banner_con_id = document.getElementById("focus_banner_con_id");
var focus_banner_con_id_li = focus_banner_con_id.getElementsByTagName("li");

focus_banner_con_id.onmouseover = function () {
  focus_banner_con_span[0].style.left = 0;
  focus_banner_con_span[1].style.right = 0;
}

focus_banner_con_id.addEventListener('mouseover',function (ev) {
  focus_banner_con_span[0].style.left = 0;
  focus_banner_con_span[1].style.right = 0;
},false);

focus_banner_con_id.addEventListener('mouseout',function (ev) {
  focus_banner_con_span[0].style.left = -33 + "px";
  focus_banner_con_span[1].style.right = -33 + "px";
},false);

focus_banner_con_span[0].addEventListener("mouseover", function () {
  this.style.left = 0;
  focus_banner_con_span[1].style.right = 0;
  this.addEventListener("mouseout", function () {
    focus_banner_con_span[0].style.left = -33 + "px";
    focus_banner_con_span[1].style.right = -33 + "px";
  })
},false);

focus_banner_con_span[1].addEventListener("mouseover", function () {
  focus_banner_con_span[0].style.left = 0;
  this.style.right = 0;
  this.addEventListener("mouseout", function () {
    focus_banner_con_span[0].style.left = -33 + "px";
    focus_banner_con_span[1].style.right = -33 + "px";
  })
},false);

var focus_banner_con_span_num = 0;
var fbc_trigger_line = document.getElementById("fbc_trigger_line");  //轮播图底部小div随着轮播图走 默认红色

focus_banner_con_span[0].addEventListener("click", function () {
  for(var i = 0; i < focus_banner_con_id_li.length ; i++) {
    focus_banner_con_id_li[i].style.zIndex = 1;
  }
  focus_banner_con_span_num--;
  if(focus_banner_con_span_num == -1){
    focus_banner_con_span_num = 3;
  }
  focus_banner_con_id_li[focus_banner_con_span_num].style.zIndex = 2;

  //fbc_trigger_line.style.left = (115+(focus_banner_con_span_num*229)) + "px";
  move(fbc_trigger_line,"left",8,(115+(focus_banner_con_span_num*229)));

},false);

focus_banner_con_span[1].addEventListener("click", function () {
  for(var i = 0; i < focus_banner_con_id_li.length ; i++) {
    focus_banner_con_id_li[i].style.zIndex = 1;
  }
  focus_banner_con_span_num++;
  if(focus_banner_con_span_num == 4){
    focus_banner_con_span_num = 0;
    focus_banner_con_id_li[focus_banner_con_span_num].style.zIndex = 2;
    move(fbc_trigger_line,"left",15,(115+(focus_banner_con_span_num*229)));
  }else {
  focus_banner_con_id_li[focus_banner_con_span_num].style.zIndex = 2;
  //fbc_trigger_line.style.left = (115+(focus_banner_con_span_num*229)) + "px";
  move(fbc_trigger_line,"left",8,(115+(focus_banner_con_span_num*229)));
  }
},false);







//focus_banner_con_id.onmouseout = function () {
//  focus_banner_con_span[0].style.left = -33 + "px";
//  focus_banner_con_span[1].style.right = -33 + "px";
//}

//移动函数
function move(obj,attr,speed,target,fn) {
  // 为了方便控制同一个定时器  谁运动 就给谁添加一个自定义属性 然后在自定义属性下面 挂载一个定时器

  /*var timer = null;*/
  // 用定时器之前 先清除定时器 把原来的定时器干掉 从新开新的定时器
  clearInterval(obj.timer);
  // 开启一个定时器

  // 利用getStyle函数  获取你要变化的样式属性的初始值
  // 获取完 之后 100px  ===> 100
  var iCur = parseFloat(getStyle(obj,attr));
  // 自动处理速度的正 负 值
  speed = iCur > target ? -Math.abs(speed) : Math.abs(speed);

  obj.timer = setInterval(function(){

    iCur += speed;

    // 某些情况下 速度并不能正好到达目标点 所以控制一下
    if (iCur >= target&&speed>0 || iCur <= target&&speed<0) {
      iCur = target; //
      // 这里清除定时器 说明运动完毕了
      clearInterval(obj.timer);
      obj.timer = null;
      obj.style[attr] = iCur + "px";
      // 看看传入的回调函数是否存在 并且 严格判断传入的是不是函数
      if(fn&&typeof fn == "function") {
        fn();
      }
    } else {
      obj.style[attr] = iCur + "px";
    }

  },10);
}


// 这是一个获取样式的兼容性函数  (所有的兼容性函数的处理方式 基本是利用浏览器的能力 进行检测)
function getStyle(obj,attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj)[attr];
  }
}
