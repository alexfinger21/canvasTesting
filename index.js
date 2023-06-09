const canvas = document.getElementById("main-game")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

function resize() {
    canvas.height = window.innerHeight * 0.15
    canvas.width = window.innerWidth
}


resize()
window.addEventListener("resize", resize)

canvas.addEventListener("click", () => {
    
})

