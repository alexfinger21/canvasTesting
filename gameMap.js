obstacles = []

class gameMap {
    constructor(length, height, img, x, y, difficulty = 1) {
        this.difficulty = difficulty

        this.length = length
        this.height = height

        this.x = x
        this.y = y

        this.image = img
    }

    draw(ctx, dist) {
        // console.log(this.x)
        // console.log(this.y)
        // console.log(this.length)
        // console.log(this.image.naturalWidth)

        const randomNum = Math.random()*500
        const lastObstacle = obstacles[obstacles.length - 1] ? obstacles[obstacles.length - 1].x : 0

        if ((dist+randomNum-lastObstacle) > Obstacle.getminDist()) {
            obstacles.push(new Obstacle(0.01, dist+randomNum, canvas.offsetHeight - canvas.offsetHeight/1.51, this.image))
        }

        ctx.save()

        let j = 0        
        
        for (let i = 0; i<this.length/(this.image.naturalWidth - (this.image.naturalWidth - 1200)) - 1; i++) {
            j++
            ctx.drawImage(this.image, 2, 54, this.image.naturalWidth - (this.image.naturalWidth - 1200), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1200)) * i, this.y, (this.image.naturalWidth - (this.image.naturalWidth - 1200)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends
        }


        ctx.drawImage(this.image, 2, 54, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1200)), 13, (this.image.naturalWidth - (this.image.naturalWidth - 1200)) * j, this.y, this.length%(this.image.naturalWidth - (this.image.naturalWidth - 1200)), this.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends
        
        Obstacle.draw(ctx, obstacles)

        ctx.restore()
    }
}