const minDist = 100
const cacti = [[332, 24], [357, 23], [383, 23], [407, 23], [431, 50]]

class Obstacle {
    constructor(obstacleChance = 0.01, xPos, yPos, img) {
        this.obstacleChance = obstacleChance 

        this.x = xPos
        this.y = yPos
        this.height = 48

        this.cactus = Math.floor(Math.random() * cacti.length)

        this.image = img
    }

    static getminDist() {
        return minDist
    }

    static draw(ctx, objs) {
        console.log(objs)
        for (const obj of objs) {
            console.log("drawing!")
            //ctx.save()

            ctx.drawImage(obj.image, cacti[obj.cactus][0], 1, cacti[obj.cactus][1], obj.height, obj.x, obj.y, cacti[obj.cactus][1], obj.height) // the 2nd and 3rd values are where the road starts on the image, and 1200 is where the road ends

            //ctx.restore()
        }
    }
}