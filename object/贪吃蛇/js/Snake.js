function Snake(options) {
    options = options || {}
    this.w = options.w || 20
    this.h = options.h || 20
    this.direction = 'right'
    this.body = [
        {
            x: 1,
            y: 2,
            color: 'pink',
            element: document.createElement('div')
        },
        {
            x: 2,
            y: 2,
            color: 'pink',
            element: document.createElement('div')
        },
        {
            x: 3,
            y: 2,
            color: 'red',
            element: document.createElement('div')
        }
    ]
    this.init()
}

Snake.prototype = {
    constructor: Snake,
    init: function () {
        var self = this
        self.body.forEach(function (item, index) {
            var div = item.element
            div.style.width = self.w + 'px'
            div.style.height = self.h + 'px'

            div.style.backgroundColor = item.color
            div.style.position = 'absolute'

            div.style.left = item.x * self.w + 'px'
            div.style.top = item.y * self.h + 'px'
            scene.appendChild(div)
        })
    },

    move: function (food) {
        var head = _.last(this.body)
        var self = this

        /* if(self.checkCollision()){
         game.stop()

         return
         }*/


        for (var i = 0; i < this.body.length - 1; i++) {
            var next = this.body[i + 1]
            var curr = this.body[i]
            curr.x = next.x
            curr.y = next.y
        }


        switch (this.direction) {
            case 'left':
                head.x -= 1
                break
            case 'up':
                head.y -= 1
                break
            case 'right':
                head.x += 1
                break
            case 'down':
                head.y += 1
                break
            default:
                break
        }


        self.body.forEach(function (item) {
            item.element.style.left = item.x * self.w + 'px'
            item.element.style.top = item.y * self.h + 'px'
        })

       // self.checkFood(food)


    },


    /*checkCollision
     :
     function () {

     var isCollision = false
     var head = _.last(this.body)
     if (this.direction === 'right' && (head.x + 1) * this.w >= 800) {
     isCollision = true
     } else if (this.direction === 'left' && (head.x - 1) < 0) {
     isCollision = true
     } else if (this.direction === 'down' && (head.y + 1) * this.h >= 600) {
     isCollision = true
     } else if (this.direction === 'up' && (head.y - 1) < 0) {
     isCollision = true
     }

     }
     ,*/

    setDirection: function (keyCode) {
        switch (keyCode) {
            case 37:
                this.direction !== 'right' && (this.direction = 'left')
                break
            case 38:
                this.direction !== 'down' && (this.direction = 'up')
                break
            case 39:
                this.direction !== 'left' && (this.direction = 'right')
                break
            case 40:
                this.direction !== 'up' && (this.direction = 'down')
        }
    }


}










