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
        for(let i = 0 ; i < 6 ; i++){
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(Math.floor(Math.random() * 600),Math.floor(Math.random() * 600))
            console.log(fish.pos)
            fish.vel = new Vector(Math.random()*50,0)
            this.add(i)
        }

    
        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(800,50)
        // fish.vel = new Vector(-40,0)


        const heimer = new Actor()
        heimer.graphics.use(Resources.Heimer.toSprite())
        heimer.pos = new Vector(0,50)
        heimer.vel = new Vector (40,0)

        const backGround = new Actor ()
        backGround.graphics.use(Resources.Stars.toSprite())
        backGround.pos = new Vector(0,0)
        backGround.scale = new Vector(2,2)


        this.add(backGround)
        this.add(heimer)
    }
    
}

new Game()
