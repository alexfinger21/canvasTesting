class Obstacle {
    constructor(obstacleChance = 0.01, yPos, img) {
        this.obstacleChance = obstacleChance 

        this.lastSpawned = 0

        this.y = yPos
        this.height = 48

        this.minDist = 50

        this.cacti = [[332, 34], [357, 23], [383, 23], [407, 23], [431, 50]]

        this.image = this.image
    }

    draw(ctx) {
        ctx.save()

        //Math.random()

        ctx.drawImage(this.image, this.cacti[0][0], 1, this.cacti[0][1], this.height, 20, this.y, this.cacti[0][1], this.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends

        ctx.restore()
    }
}