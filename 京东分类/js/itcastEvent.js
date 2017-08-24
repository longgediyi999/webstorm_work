/**
 * 牛逼哄哄的插件
 * @param {* 要操作的dom元素} div 
 */
function itcast(div) {
  var obj = {
    tap: function (callback) {
      // 获取目标元素
      // var div = document.querySelector("div");
      // 按下的坐标
      var startX, startY;

      // 按下的时间
      var startTime;
      // 手指按下
      div.addEventListener("touchstart", function (e) {
        // 判断手指的个数
        if (e.targetTouches.length > 1) {
          return;
        }

        // 记录手指按下的坐标
        startX = e.targetTouches[0].clientX;
        startY = e.targetTouches[0].clientY;

        // 记录按下的时间  返回 1970 到现在的毫秒数
        startTime = Date.now();
        // var date=new Date();
        // startTime=date.getTime();
      });
      // 手指离开
      div.addEventListener("touchend", function (e) {
        // 判断手指的个数
        if (e.changedTouches.length > 1) {
          return;
        }

        // 记录手指松开的坐标
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;

        // 判断手指移动的距离
        if (Math.abs(endX - startX) > 5) {
          return;
        }
        if (Math.abs(endY - startY) > 5) {
          return;
        }

        // 手指离开的时间 单位是毫秒
        var endTime = Date.now();

        // 判断按下时长
        if (endTime - startTime > 300) {
          return;
        }
        // 触发自己点击 tap 事件的逻辑
        // console.log("e");
        callback(e);
      });
    },
    swipe: function (callback) {
      // var div = document.querySelector("div");
      // 手指按下的坐标
      var startX, startY;
      // 按下时间
      var startTime;

      // 手指按下事件
      div.addEventListener("touchstart", function (e) {
        // 判断手指个数
        if (e.targetTouches.length > 1) {
          return;
        }

        // 记录手指按下的坐标
        startX = e.targetTouches[0].clientX;
        startY = e.targetTouches[0].clientY;

        // 手指按下时间  毫秒
        startTime = Date.now();
      });

      // 手指离开
      div.addEventListener("touchend", function (e) {
        // 判断手指的个数
        if (e.changedTouches.length > 1) {
          return;
        }


        // 记录手指离开的坐标
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;

        // 记录滑动方向
        var direction;

        // 判断移动的距离 判断滑动的方向 
        if (Math.abs(endX - startX) > 15) {
          // 判断方向  大于0 右 小于 左
          direction = endX > startX ? "right" : "left";
        } else if (Math.abs(endY - startY) > 15) {
          // 判断方向  大 下滑 小 上滑动
          direction = endY > startY ? "down" : "up";
        }
        else {
          // 水平和垂直都没有发生位移 返回
          return;
        }

        // 判断时间
        var endTime = Date.now();
        if (endTime - startTime > 800) {
          return;
        }

        // 执行自己的逻辑
        // console.log(direction);
        callback(direction);
      })
    }
  };

  return obj;
}