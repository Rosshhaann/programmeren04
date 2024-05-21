
import { Enemy } from "./enemy.js";
import { Resources } from "./resources.js";
import { Bullet } from "./bullet.js";
import { Vector, Scene, Keys, clamp } from "excalibur";
import { Goku } from "./goku.js";
/// specificatie een van de enemey
export class Freeza extends Enemy {

    constructor() {
        super()

    }

    life
    onInitialize(engine) {
                // Freeze heeft 10 levens 
                this.life = 3
        console.log("Freeza is created")
        Resources.FreezaGreetings.play(1)
        this.graphics.use(Resources.Freeza.toSprite())

        this.pos = new Vector(1600, Math.random() * 1200)
        this.vel = new Vector(-660, 0)


        // eventlisteners
        this.on('collisionstart', (event) => { this.killFreeza(event) })
        this.on("exitviewport", () => this.resetPositionFreeza())
    }
    onPostUpdate(engine) {
        if (this.life <= 0) {
            engine.goToScene('game-won')
        }
    }
    // onPostKill wil ik dat hij de scene game won laat zien


    loseLife() {
        this.life--
        this.actions.blink(200, 200, 2)
        console.log(`${this.life}`);
    }

    killFreeza(event) {
        if (event.other instanceof Bullet) {
            this.loseLife()
            // als freeza wordt geraakt door een blast verliest hij 1 leven en zet zijn 10 stappen terug op de X as
            this.pos = new Vector(this.pos.x - 90, this.pos.y = Math.random() * 900)
            this.vel = new Vector(this.vel.x - 40, 0)
            event.other.kill()
            if (this.life <=1) {
                this.pos = new Vector(-100, 0)
                // this.kill()
            }


        }

    }
    resetPositionFreeza(event) {
        this.pos = new Vector(2000, Math.floor(Math.random() * 1080))

    }
}