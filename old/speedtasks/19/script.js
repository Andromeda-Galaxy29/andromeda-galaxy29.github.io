canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

let pressed = false

document.addEventListener("mousemove", e=>{
    if(pressed){
        ctx.lineTo(e.x, e.y)
        ctx.stroke()
    }
})

document.addEventListener("mousedown", e=>{
    ctx.beginPath()
    pressed = true
})

document.addEventListener("mouseup", e=>{
    ctx.closePath()
    pressed = false
})