canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let circles = []
let mouseX = 0
let mouseY = 0

for(let i = 0; i<Math.round(Math.random() * 10 + 10); i++){
    circles.push({
        "x": Math.round(Math.random() * (canvas.width-100) + 50),
        "y": Math.round(Math.random() * (canvas.height-100) + 50),
        "r": Math.random() * 50 + 10,
        "velX": (Math.random() > 0.5 ? -1 : 1),
        "velY": (Math.random() > 0.5 ? -1 : 1),
        "justBounced": false
    })
}

document.addEventListener("mousemove", e=>{
    mouseX = e.x
    mouseY = e.y
})

main()

function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    console.log(circles)

    for(circle of circles){
        if(circle.x - circle.r < 0 || circle.x + circle.r> canvas.width || circle.y - circle.r < 0 || circle.y + circle.r> canvas.height){
            circle.velX = -circle.velX
            circle.velY = -circle.velY
        }
        circle.x += circle.velX
        circle.y += circle.velY

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.r, 0, 360);
        ctx.closePath()
        ctx.stroke()

        if(dist(mouseX, mouseY, circle.x, circle.y) < circle.r && !circle.justBounced){
            circle.velX = -circle.velX
            circle.velY = -circle.velY
            circle.justBounced = true
        }
        if(dist(mouseX, mouseY, circle.x, circle.y) > circle.r){
            circle.justBounced = false
        }
    }

    requestAnimationFrame(main)
}

function dist(x1, y1, x2, y2){
    a = Math.abs(x1 - x2)
    b = Math.abs(y1 - y2)

    len = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    return len
}