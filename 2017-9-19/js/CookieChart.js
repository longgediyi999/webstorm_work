;
(function () {
    function CookieChart(options) {
        this.canvas = document.getElementById(options.id)
        this.ctx = canvas.getContext('2d')
        this.data = options.data
        this.radius = 200
        this.lineOut = 20

        this.circlieCenter = {
            x: canvas.width / 2,
            y: canvas.height / 2
        }

        this.startAngle = Math.PI / 180 * options.startAngle
        this.init()
    }

    /**
     * 初始化
     */
    CookieChart.prototype.init = function () {
        this.drawCookie()
    }
    /**
     *绘制饼图
     */
    CookieChart.prototype.drawCookie = function () {
        this.translateDataToRadians()
        
        var ctx = this.ctx
        var circleCenter = this.circlieCenter
        var startAngle = this.startAngle
        
        this.data.forEach(function (item) {
            ctx.beginPath()

            ctx.moveTo(circleCenter.x,circleCenter.y)
            var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
            ctx.fillStyle = color
            ctx.arc(circleCenter.x,circleCenter.y,200,startAngle,startAngle+item.radian)
            ctx.fill()
            startAngle += item.radian

            //2档
            ctx.beginPath()
            ctx.moveTo(circleCenter.x,circleCenter.y)

            var c = this.radius + this.lineOut
            var b = Math.cos(startAngle - item.radian / 2) * c
            var a = Math.sin(startAngle - item.radian / 2) * c

            var lineX = b + circleCenter.x
            var lineY = a + circleCenter.y

            ctx.lineTo(lineX, lineY)

            var textWidth = ctx.measureText(item.title).width

            ctx.font = '16px 微软雅黑'
            ctx.textBaseline = 'bottom'

            if (lineX > circleCenter.x) {
                ctx.lineTo(lineX + textWidth , lineY)
                ctx.textAlign = 'left'
            } else {
                ctx.lineTo(lineX - textWidth , lineY)
                ctx.textAlign = 'right'
            }

            ctx.fillText(item.title,lineX,lineY)
            ctx.strokeStyle = color
            ctx.stroke()

        }.bind(this))
        
    }
    /**
     *将业务数据转换为弧度
     */
    CookieChart.prototype.translateDataToRadians = function () {
        //需求 得到每一种水果占用总量的百分比
        //把一个完整的圆弧分成100份,计算出每份的弧度大小
        //然后让每个水果的百分比乘以每份的弧度
        var sum = this.data.reduce(function (prev, curr) {
            return prev + curr.count
        },0)

        var perRadian = Math.PI * 2 / 100

        this.data.forEach(function (item) {
            item.radian = item.count / sum * 100 * perRadian
        })

    }


    window.CookieChart = CookieChart
})()