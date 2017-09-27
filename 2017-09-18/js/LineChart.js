;
(function () {
    function LineChart(id, data) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext('2d')

        this.data = data

        this.originPoint = {
            x: 50,
            y: canvas.height - 50
        }

        this.axis = {
            x: canvas.width - 50,
            y: 50
        }

        this.init()  //默认执行 prototype函数 ?
    }

    LineChart.prototype = {
        constructor : LineChart,
        init: function () {
            this.drawAxis()
            this.drawDots()
            this.drawLine()
        },

        //绘制坐标系
        drawAxis : function () {

            var ctx = this.ctx
            var originPoint = this.originPoint
            var axis = this.axis

            ctx.beginPath()
            ctx.moveTo(originPoint.x,originPoint.y)
            ctx.lineTo(axis.x,originPoint.y)
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(axis.x,originPoint.y)
            ctx.lineTo(axis.x,originPoint.y-10)
            ctx.lineTo(axis.x+20,originPoint.y)
            ctx.lineTo(axis.x,originPoint.y+10)
            ctx.closePath()
            ctx.fill()

            ctx.beginPath()
            ctx.moveTo(originPoint.x,originPoint.y)
            ctx.lineTo(originPoint.x,axis.y)
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(originPoint.x,axis.y)
            ctx.lineTo(originPoint.x-10,axis.y)
            ctx.lineTo(originPoint.x,axis.y-20)
            ctx.lineTo(originPoint.x+10,axis.y)
            ctx.closePath()
            ctx.fill()
        },

        //将坐标系坐标转为canvas坐标
        drawDot : function (axisX,axisY,edgeLength) {
            
        },
        
        //绘制点
        drawDots : function () {
            
        },
        
        //连接点
        drawLine : function () {
            
        }


    }

    window.LineChart = LineChart
})()