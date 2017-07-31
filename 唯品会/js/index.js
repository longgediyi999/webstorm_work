/**
 * Created by qiangxl on 2017/7/31.
 */
var sel_area_d_id = document.getElementById("sel_area_d_id");
var sel_area_id = document.getElementById("sel_area_id");
var sel_area_div = document.getElementById("sel_area_div");
sel_area_id.onmousemove = function () {
  sel_area_d_id.style.display = "block";
  sel_area_div.setAttribute("class", "sel-area-div sel-area-div-j");
}

sel_area_id.onmouseout = function () {
  sel_area_d_id.style.display = "none";
  sel_area_div.setAttribute("class", "sel-area-div");
}



var main_nav = document.getElementById("main_nav");
window.onscroll = function() {
  // 垂直方向滚动过的距离 做了一个浏览器兼容处理
  var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  /*console.log(123);*/
  // 判断 滚动过的距离 是不是大于等于 oTop的实际内容高度

}