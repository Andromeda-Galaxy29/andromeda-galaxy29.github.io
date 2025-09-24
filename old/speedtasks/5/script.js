canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.addEventListener("mousemove", e=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Круг
    ctx.beginPath()
    ctx.arc(window.innerWidth/2, window.innerHeight/2, 100, 0, 360);
    ctx.closePath()
    ctx.stroke()

    //Я сам не понял что я тут написал
    x1 = window.innerWidth/2
    y1 = window.innerHeight/2
    x2 = e.x
    y2 = e.y
    a = Math.abs(x1 - x2)
    b = Math.abs(y1 - y2) 
    len = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    x = (e.x - window.innerWidth/2) / len
    y = (e.y - window.innerHeight/2) / len

    ctx.beginPath()
    ctx.moveTo(window.innerWidth/2, window.innerHeight/2)
    ctx.lineTo(window.innerWidth/2 + x*100, window.innerHeight/2 + y*100)
    ctx.closePath()
    ctx.stroke()
})