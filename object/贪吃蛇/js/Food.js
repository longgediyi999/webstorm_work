var scene = document.getElementById('scene')

function Food(options) {
    options = options || {}
    this.w = options.w || 20 //宽
    this.h = options.h || 20 //高
    this.color = options.color || 'pink'
    this.element = document.createElement('div')  //对象管理的dom对象

    //当数据化初始化完毕之后,调用init将食物渲染到游戏
    this.init()

    // 初始化的时候四边随便改变其坐标
    this.randomPosition()

}

Food.prototype = {
    constructor: Food,

    init: function () {
        var div = this.element
        div.style.width = this.w + 'px'
        div.style.height = this.h + 'px'
        div.style.backgroundColor = this.color
        div.style.position = 'absolute'
        scene.appendChild(div)
    },

    randomPosition: function () {
        var randomX = _.random(0,(scene.offsetWidth/this.w - 1)) * this.w
        var randomY = _.random(0,(scene.offsetHeight/this.h - 1)) *this.h
        this.element.style.left = randomX + 'px'
        this.element.style.top = randomY + 'px'
    }
}

