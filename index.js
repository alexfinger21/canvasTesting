const canvas = document.getElementById("main-game")
const canvasCTX = canvas.getContext("2d")

const spriteSheetSrc = "images/spritemain.png" 
let toggled = false

function resize() {
    if (toggled === false) {
        canvas.style.height = window.innerHeight * 0.05 + "px"
        canvas.style.width = window.innerWidth * 0.10 + "px"
        console.log("hasn't clicked")
    } else if (toggled === true) {
        canvas.style.height = window.innerHeight * 0.15 + "px"
        canvas.style.width = window.innerWidth + "px"
    }
}

function init() {
    const map = new gameMap(canvas.width, canvas.height, spriteSheetSrc)
    map.draw(canvasCTX)
}


resize()
window.addEventListener("resize", resize)

canvas.addEventListener("click", () => {
    if (!toggled) {
        console.log("here!")

        toggled = "in progress"
        let start

        const duration = 500
        const x = window.innerWidth
        const y = window.innerHeight * 0.15

        const initAnim = time => {
            if (!start) {
                start = time
                window.requestAnimationFrame(initAnim)
                return
            }

            const progress = (time - start)/duration

            console.log("progress - " + progress)

            if (progress < 1) {
                canvas.style.width = lerp(window.innerWidth * 0.10, x, progress) + "px"
                canvas.style.height = lerp(window.innerHeight * 0.05, y, progress) + "px"
                window.requestAnimationFrame(initAnim)
            } else {
                canvas.width = x + "px"
                canvas.height = y + "px"
                toggled = true
                init()
            }
        }

        requestAnimationFrame(initAnim)
    }
})

