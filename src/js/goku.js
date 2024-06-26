import { Actor, CollisionType, Color, DisplayMode, Engine, Font, Keys, Label, Vector, Scene, clamp } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Wave } from "./gun.js";
import { Freeza } from "./freeza.js";
import gokuanim from "./gokuanim.js";

export class Goku extends Actor {

    constructor() {
        super({
            width: 100,
            height: 100,
            radius:50
        })
        // Geef de player 100hp en zet de score op 0
        this.health = 40
        this.pos = new Vector(120, 500)
    }


    onInitialize(engine) {
        this.addBlast()
        this.on("exitviewport", () => this.resetPositionPlayer())
        this.on("collisionstart", (event) => this.gameOver(event))

    }
    addBlast() {

        const wave = new Wave()
        this.addChild(wave)
    }

    resetPositionPlayer() {
        this.pos = new Vector(120, 500)
    }





    onPostUpdate(engine) {


        this.graphics.use(gokuanim.leftAnim)
        this.pos.y = clamp(this.pos.y, 25, 1250)
        this.pos.x = clamp(this.pos.x, 0, 100)
        this.addBlast()
        this.graphics.flipHorizontal = true
        this.rotation = 0
        let xspeed = 0;
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -500
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.graphics.use(gokuanim.leftAnim)
            xspeed = 500
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            this.removeAllChildren()
            this.graphics.use(gokuanim.upAnim)
            yspeed = -500
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            this.removeAllChildren()
            this.graphics.use(gokuanim.downAnim)
            yspeed = 500
        }
    
        this.vel = new Vector(xspeed, yspeed);

        // Shooting or jumping Keys
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            const bullet = new Bullet(this.pos)
            engine.add(bullet)
        
            Resources.GunSound.play(0.2)

        }

    }
    // Hoe krijg de huidige functie naar game engine toe?
    loseHealth(amount) {
        this.health -= amount
        this.pos = new Vector(555, 555)
        this.actions.blink(200, 200, 2)
        console.log(`${this.health}`);
    }
    gameOver(event) {
        if (event.other instanceof Freeza) {
            this.loseHealth(20)
            if (this.health === 0) {
                this.scene?.engine.goToScene('game-over')
            }
        }
    }

}