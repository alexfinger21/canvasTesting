class gameMap {
    constructor(length, height, imagesrc, difficulty = 1) {
        this.difficulty = difficulty
        this.length = length
        this.height = height
        
        const img = new Image()
        img.src = imagesrc
        this.image = img
    }

    draw(ctx) {
        console.log(this.height)
        console.log(this.length)
        ctx.drawImage(this.image, 2, 54, this.image.naturalWidth, 13, 0, 0, this.length, this.height)
    }
}