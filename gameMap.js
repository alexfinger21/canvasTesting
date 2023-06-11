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
        console.log(this.length)
        console.log(this.image.naturalWidth)

        let j = 0        
        
        console.log(this.length/(this.image.naturalWidth - (this.image.naturalWidth - 1201)) - 1)

        for (let i = 0; i<this.length/(this.image.naturalWidth - (this.image.naturalWidth - 1201)) - 1; i++) {
            j++
            console.log(i)
            ctx.drawImage(this.image, 2, 54, this.image.naturalWidth - (this.image.naturalWidth - 1201), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1201)) * i, this.y, (this.image.naturalWidth - (this.image.naturalWidth - 1201)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1201 is where the road ends
        }

        ctx.drawImage(this.image, 2, 54, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1201)), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1201)) * j, this.y, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1201)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1201 is where the road ends

    }
}