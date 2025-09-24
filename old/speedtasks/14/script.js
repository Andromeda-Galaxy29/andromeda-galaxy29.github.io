canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.addEventListener("mousemove", e=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let x = window.innerWidth/2
    let y = window.innerHeight/2

    if(e.x < x){
        ctx.fillStyle = "white"
    }else{
        ctx.fillStyle = "black"
    }
    ctx.fillRect(x - 100, y - 100, 200, 200)
})