const canvas = document.getElementById("main-game")

const canvasCTX = canvas.getContext("2d")
canvasCTX.imageSmoothingEnabled = false

const spriteSheetSrc = "images/spritemain.png" 
let toggled = false

let distance = 0

function initCanvas() {
    console.log("text")
    canvasCTX.font = "18px Fantasy"
    canvasCTX.textAlign = "center"
    canvasCTX.fillText("CLICK TO START", canvas.width/2, canvas.height/2)
}

function fadeOut() {
    const duration = 500
    let start
    let called = false

    function loop(time) {
        if (!start) {
            start = time
            requestAnimationFrame(loop)
            return
        }

        const alpha = Math.max(1 - (time - start)/duration, 0)

        canvasCTX.clearRect(0, 0, canvas.width, canvas.height)

        canvasCTX.fillStyle = `rgba(0, 0, 0, ${alpha})`
        canvasCTX.font = "18px Fantasy"
        canvasCTX.textAlign = "center"
        canvasCTX.fillText("CLICK TO START", canvas.width/2, canvas.height/2)

        if (alpha <= 0.3 && !called) {
            console.log("CALLED FUNC")
            called = true
            resizeCanvas()
        }

        if (alpha == 0) {
            canvasCTX.clearRect(0, 0, canvas.width, canvas.height)
        } else {
            requestAnimationFrame(loop)
        }
    }

    requestAnimationFrame(loop)
}

function resizeCanvas() {
    console.log("canvas resize called!")

    toggled = "in progress"
    let start

    const duration = 400
    const x = window.innerWidth
    const y = window.innerHeight * 0.15

    const initAnim = time => {
        if (!start) {
            start = time
            window.requestAnimationFrame(initAnim)
            return
        }

        const progress = Math.pow((time - start)/duration, 2)

        console.log("progress - " + progress)

        if (progress < 1) {
            canvas.style.width = lerp(window.innerWidth * 0.10, x, progress) + "px"
            canvas.style.height = lerp(window.innerHeight * 0.05, y, progress) + "px"
            window.requestAnimationFrame(initAnim)
        } else {
            canvas.style.width = x + "px"
            canvas.style.height = y + "px"
            canvas.width = x/1.5
            canvas.height = y/1.5
            toggled = true
            init()
        }
    }

    requestAnimationFrame(initAnim)
}

function resize() {
    if (toggled === false) {
        canvas.style.height = window.innerHeight * 0.05 + "px"
        canvas.style.width = window.innerWidth * 0.10 + "px"

        canvas.height = window.innerHeight * 0.05
        canvas.width = window.innerWidth * 0.10

        console.log("hasn't clicked")
    } else if (toggled === true) {
        console.log("hi")
        canvas.style.height = window.innerHeight * 0.15 + "px"
        canvas.style.width = window.innerWidth + "px"

        canvas.height = window.innerHeight * 0.15
        canvas.width = window.innerWidth
    }
}

function init() {
    const img = new Image()
    img.src = "images/spritemain.png"

    img.onload = () => {//render map
        //canvasCTX.save()

        const xCanvas = window.innerWidth
        const yCanvas = window.innerHeight * 0.15

        const anim = function () {
            canvasCTX.save()

            canvas.width = xCanvas/1.5
            canvas.height = yCanvas/1.5

            canvasCTX.translate(-distance, 0)

            const map = new gameMap(canvas.offsetWidth, canvas.offsetHeight/10, img, 0, canvas.offsetHeight - canvas.offsetHeight/2.2)
            map.draw(canvasCTX, distance)

            canvasCTX.restore()

            distance += 2

            window.requestAnimationFrame(anim)
        }

        anim()
    }
}



resize()
initCanvas()

window.addEventListener("resize", resize)

canvas.addEventListener("click", () => {
    if (!toggled) {
        fadeOut()
    }
})
