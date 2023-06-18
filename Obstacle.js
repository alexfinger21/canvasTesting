class Obstacle {
    constructor(obstacleChance = 0.01, yPos) {
        this.obstacleChance = obstacleChance

        this.lastSpawned = 0

        this.y = yPos
        this.height = 48

        this.minDist = 50

        this.cacti = [[332, 34], [357, 23], [383, 23], [407, 23], [431, 50]]
    }

    draw(ctx) {
        ctx.save()

        Math.random()
    }
}