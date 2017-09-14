function Ball(options) {
    this.r = options.r || 20;
    this.color = options.color || "red";
    this.x = options.x || 100;
    this.y = options.y || 100;

    this.game = options.game
    this.speed = options.game
    this.element = document.createElement('div')

    this.directionX = Math.random() * 10 - 5
    this.directionY = Math.random() * 10 - 5


    this.init();
}

Ball.prototype.init = function () {
    var div = this.element
    div.style.width = this.r * 2 + "px";
    div.style.height = this.r * 2 + "px";
    div.style.borderRadius = this.r + "px";
    div.style.backgroundColor = this.color;
    div.style.position = "absolute"
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    document.body.appendChild(div);
}

Ball.prototype.move = function () {
    this.x += this.directionX
    this.y += this.directionY
    this.r -=1
    var div = this.element

    if(this.r <= 0){
        document.body.removeChild(div)

        var index = this.game.ballList.indexOf(this)
        this.game.ballList.splice(index,1)
    }

}


Ball.prototype.render = function () {
    var div = this.element
    div.style.left = this.x + 'px'
    div.style.top = this.y + 'px'
    div.style.width = this.r * 2 + 'px'
    div.style.height = this.r * 2 + 'px'
    div.style.borderRadius = this.r +'px'
}





















