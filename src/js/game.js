import '../css/style.css'
import { Actor, Engine, KillEvent, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")



        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600))
        fish.vel = new Vector(Math.random() * 50, 0)

        const heimer = new Actor()
        heimer.graphics.use(Resources.Heimer.toSprite())
        heimer.pos = new Vector(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600))
        heimer.vel = new Vector(Math.random() *-50, 0)


        const backGround = new Actor()
        backGround.graphics.use(Resources.Stars.toSprite())
        backGround.pos = new Vector(0, 0)
        backGround.scale = new Vector(2, 2)


        this.add(backGround)
        this.add(heimer)
        this.add(fish)

    }

}

new Game()
