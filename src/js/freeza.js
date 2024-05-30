
import { Enemy } from "./enemy.js";
import { Resources } from "./resources.js";
import { Bullet } from "./bullet.js";
import { Vector, Scene, Keys, clamp } from "excalibur";
import { Goku } from "./goku.js";
/// specificatie een van de enemey
export class Freeza extends Enemy {

    constructor(life) {
        super()
        this.life = life

    }
    onInitialize(engine) {

        console.log("Freeza is created")
        Resources.FreezaGreetings.play(1)
        this.graphics.use(Resources.Freeza.toSprite())
        this.scale = new Vector(0.5, 0.45)
        this.pos = new Vector(1600, Math.random() * 1000)
        this.vel = new Vector(-660, 0)


        // eventlisteners
        this.on('collisionstart', (event) => { this.killFreeza(event) })
        this.on("exitviewport", () => this.resetPositionFreeza())
    }

     // als freeza wordt geraakt door een blast verliest hij 1 leven en zet zijn 10 stappen terug op de X as
    loseLife() {
        this.life--
        this.actions.blink(200, 200, 2)
        this.pos = new Vector(this.pos.x - 90, this.pos.y = Math.random() * 900)
        this.vel = new Vector(this.vel.x - 40, 0)
    }

    killFreeza(event) {
        if (event.other instanceof Bullet) {
            this.loseLife()
            // @ts-ignore
            this.scene?.engine.updateScore(1)
            event.other.kill()
            if (this.life === 0) {
               this.scene?.engine.goToScene('game-won')
            }

        }

    }
    resetPositionFreeza(event) {
        this.pos = new Vector(2000, Math.floor(Math.random() * 900))
    }
}