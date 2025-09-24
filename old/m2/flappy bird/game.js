var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var bird = new Image()
bird.src = "assets/bird.png"
var bg = new Image()
bg.src = "assets/bg.png"
var ground = new Image()
ground.src = "assets/ground.png"
var pipe_top = new Image()
pipe_top.src = "assets/pipe_top.png"
var pipe_bottom = new Image()
pipe_bottom.src = "assets/pipe_bottom.png"

const gap = 108
const gravity = 0.3
const jump_height = 5
const difficulty = 0.1

var score
var just_scored = false
var highscore = 0
var bird_y
var bird_x
var bird_accel
var just_jumped
var pipe_x
var pipe_y
var pipe_speed
reset()

var keys = {}
document.addEventListener("keydown", e => {
    keys[e.key] = true
})
document.addEventListener('keyup', e => {
    delete keys[e.key];
    just_jumped = false
})

function jump() {
    bird_accel = -jump_height
}
function moveLeft() {
    bird_x -= 2
    if(bird_x < 0){
        bird_x = 0
    }
}
function moveRight() {
    bird_x += 2
    if(bird_x + bird.width > canvas.width){
        bird_x = canvas.width - bird.width
    }
}

function reset() {
    score = 0
    just_scored = false

    bird_y = 100
    bird_x = 32
    bird_accel = 0
    just_jumped = false

    pipe_x = canvas.width
    pipe_y = 0
    pipe_speed = 2
}

function update() {
    if((keys["w"] || keys[" "] || keys["ArrowUp"]) && !just_jumped){
        jump()
        just_jumped = true
    }
    if(keys["a"] || keys["ArrowLeft"]){
        moveLeft()
    }
    if(keys["d"] || keys["ArrowRight"]){
        moveRight()
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0)

    //Moves the pipe
    pipe_x -= pipe_speed
    //Moves the pipe back to the beginning when it goes off-screen
    if (pipe_x < -pipe_top.width) {
        pipe_x = canvas.width
        pipe_y = Math.floor(Math.random() * pipe_top.height) - pipe_top.height
        just_scored = false
    }
    ctx.drawImage(pipe_top, pipe_x, pipe_y)
    ctx.drawImage(pipe_bottom, pipe_x, pipe_y + pipe_top.height + gap)

    ctx.drawImage(ground, 0, canvas.height - ground.height)

    //Falling
    bird_accel += gravity
    bird_y += bird_accel
    //Doesn't allow the bird to go outside the screen
    if (bird_y < 0) {
        bird_y = 0
        bird_accel = 0
    }
    //Ground collision
    if (bird_y + bird.height >= canvas.height - ground.height) {
        reset()
    }
    if (bird_x + bird.width >= pipe_x && bird_x <= pipe_x + pipe_top.width &&
        (bird_y <= pipe_y + pipe_top.height || bird_y + bird.height >= pipe_y + pipe_top.height + gap)) {
        reset()
    }
    ctx.drawImage(bird, bird_x, bird_y)

    if (bird_x >= pipe_x + pipe_top.width && !just_scored) {
        score += 1
        just_scored = true
        if (score > highscore) {
            highscore = score
        }
    }
    pipe_speed = 2 + score * difficulty
    ctx.fillStyle = "#63a123";
    ctx.font = "24px Impact";
    ctx.fillText("Highscore: " + highscore, 10, canvas.height - 20);
    ctx.fillText("Score: " + score, 10, canvas.height - 50);

    requestAnimationFrame(update)
}

pipe_bottom.onload = update