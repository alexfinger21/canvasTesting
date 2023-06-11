class gameMap {
    constructor(length, height, img, x, y, difficulty = 1) {
        this.difficulty = difficulty

        this.length = length
        this.height = height

        this.x = x
        this.y = y

        this.image = img
    }

    draw(ctx) {
        console.log(this.x)
        console.log(this.y)
        console.log(this.image.naturalWidth)
        ctx.drawImage(this.image, 0, 54, this.image.naturalWidth, 13, this.x, 120, this.length, this.height)
    }
}