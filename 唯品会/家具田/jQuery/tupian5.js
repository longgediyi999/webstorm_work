/**
 * Created by qiangxl on 2017/8/7.
 */

$("#topMore").mouseover(function(){
  $(this).css("cursor","pointer");
  $("#topMoreHide").show();
  $("#topMores").removeClass("selectedm").addClass("selectedmc")
});
$("#topMore").mouseout(function(){
  $("#topMoreHide").hide();
  $("#topMores").removeClass("selectedmc").addClass("selectedm");
});

$("#topMoreHiden").mouseenter(function () {
  $("#topMoreHiden .shadow").animate({
    top:0
  },300);
  $("#topMoreHiden .brand-text").animate({
    bottom:35
  },300);
});

$("#topMoreHiden").mouseleave(function () {
  $("#topMoreHiden .shadow").animate({
    top:38
  },300);
  $("#topMoreHiden .brand-text").animate({
    bottom:10
  },300);
});

$("#topMoreHidex").mouseenter(function () {
  $("#topMoreHidex .shadow").animate({
    top:0
  },300);
  $("#topMoreHidex .brand-text").animate({
    bottom:35
  },300);
});

$("#topMoreHidex").mouseleave(function () {
  $("#topMoreHidex .shadow").animate({
    top:38
  },300);
  $("#topMoreHidex .brand-text").animate({
    bottom:10
  },300);
});

$("#topMoreHidep").mouseenter(function () {
  $("#topMoreHidep .shadow").animate({
    top:0
  },300);
  $("#topMoreHidep .brand-text").animate({
    bottom:35
  },300);
});

$("#topMoreHidep").mouseleave(function () {
  $("#topMoreHidep .shadow").animate({
    top:38
  },300);
  $("#topMoreHidep .brand-text").animate({
    bottom:10
  },300);
});

$("#topMoreHidey").mouseenter(function () {
  $(" #topMoreHidey .shadow").animate({
    top:0
  },300);
  $("#topMoreHidey .brand-text").animate({
    bottom:35
  },300);
});

$("#topMoreHidey").mouseleave(function () {
  $("#topMoreHidey .shadow").animate({
    top:38
  },300);
  $("#topMoreHidey .brand-text").animate({
    bottom:10
  },300);
});

$("#topMoreHidew").mouseenter(function () {
  $("#topMoreHidew .shadow").animate({
    top:0
  },300);
  $("#topMoreHidew .brand-text").animate({
    bottom:35
  },300);
});

$("#topMoreHidew").mouseleave(function () {
  $("#topMoreHidew .shadow").animate({
    top:38
  },300);
  $("#topMoreHidew .brand-text").animate({
    bottom:10
  },300);
});