/**
 * Created by qiangxl on 2017/9/9.
 */
function Game (interval) {
    this.snake = new Snake()
    this.food =new Food()

    this.timer = null
    this.interval = interval || 1000

    this.init()
}

Game.prototype = {
    constructor:Game,
    init: function () {
      var self = this
        document.onkeydown = function (e) {
            self.snake.setDirection(e.keyCode)
        }
    },
    start: function () {
        var self = this
        self.timer = window.setInterval(function () {
            self.snake.move(self.food)
        },self.interval)
    },
    stop: function () {
        window.clearInterval(this.timer)
    }
}