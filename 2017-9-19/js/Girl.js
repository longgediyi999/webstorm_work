;
(function () {
    function Girl(id) {

        this.canvas = document.getElementById(id)
        this.ctx = canvas.getContext('2d')
        this.img = null
        this.imgSrc = './img/rabbit.png'
        this.timer = null
        this.start = 1

        //中心点
        this.originPoint = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }

        this.originDirection = {
            x: this.originPoint.x - 20,
            y: this.originPoint.y - 32
        }

        this.frameIndex = 0  //第几张图片

        this.directions = {
            left: false,
            up: false,
            right: false,
            down: false
        }

        this.init()


    }

    Girl.prototype.setStat = function (e) {
        switch (e.keyCode) {
            case 37:
                if (this.directions.left) {
                    return
                }
                this.directions.left = true
                this.stat = 1
                this.frameIndex = 0
                break
            case 38:
                if (this.directions.up) {
                    return
                }
                this.directions.up = true
                this.stat = 3
                this.frameIndex = 0
                break
            case 39:
                if (this.directions.right) {
                    return
                }
                this.directions.right = true
                this.stat = 2
                this.frameIndex = 0
                break
            case 40:
                if (this.directions.down) {
                    return
                }
                this.directions.down = true
                this.stat = 0
                this.frameIndex = 0
                break
        }
    }


    Girl.prototype.init = function () {
        this.loadImg(function () {
            this.run()
        }.bind(this))

        document.onkeydown = (function (e) {
            this.setStat(e)
        }).bind(this)

        document.onkeyup = (function (e) {
            for (var key in this.directions) {
                this.directions[key] = false
            }
        }).bind(this)
    }


    //异步Api 当加载成功之后 会在onload中调用callback
    Girl.prototype.loadImg = function (callback) {
        var img = new Image()
        img.src = this.imgSrc
        img.onload = (function () {
            this.img = img
            callback()
        }).bind(this)
    }

    //开始定时器调用主函数
    Girl.prototype.run = function () {
        this.timer = window.setInterval(function () {
            this.mainloop()
        }.bind(this), 100)
    }

    Girl.prototype.mainloop = function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (var key in this.directions) {
            if (this.directions.left) {
                this.originDirection.x -= 1
            } else if (this.directions.up) {
                this.originDirection.y -= 1
            } else if (this.directions.right) {
                this.originDirection.x += 1
            } else if (this.directions.down) {
                this.originDirection.y += 1
            }
        }


        this.ctx.drawImage(this.img, this.frameIndex * 40, this.stat * 65, 40, 65, this.originDirection.x, this.originDirection.y, 40, 65)

        for(var key in this.directions){
            if(this.directions[key]){
                this.frameIndex ++
                this.frameIndex>=3 && (this.frameIndex = 0)
                break
            }
        }


    }


    window.Girl = Girl
})()
