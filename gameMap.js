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
        
        console.log(this.length/(this.image.naturalWidth - (this.image.naturalWidth - 1200)) - 1)

        for (let i = 0; i<this.length/(this.image.naturalWidth - (this.image.naturalWidth - 1200)) - 1; i++) {
            j++
            console.log("LOOP INVOKED: " + i)
            ctx.drawImage(this.image, 2, 54, this.image.naturalWidth - (this.image.naturalWidth - 1200), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1200)) * i, this.y, (this.image.naturalWidth - (this.image.naturalWidth - 1200)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends
        }

        console.log(this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1200)))

        ctx.drawImage(this.image, 2, 54, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1200)), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1200)) * j, this.y, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1200)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends

    }
}