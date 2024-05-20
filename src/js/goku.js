import { Actor, CollisionType, Color, DisplayMode, Engine, Font, Keys, Label, Vector, Scene, clamp } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Wave } from "./gun.js";
import { Freeza } from "./freeza.js";

export class Goku extends Actor {

    constructor() {
        super({
            width: 100,
            height: 100,
            radius:50
        })
        // Geef de player 100hp en zet de score op 0
        this.health = 100
        this.score = 0
        this.pos = new Vector(120, 500)
    }


    onInitialize(engine) {
        this.graphics.use(Resources.Goku.toSprite())
        this.addBlast()
        this.on("exitviewport", () => this.resetPositionPlayer())
        this.on("collisionstart", (event) => this.gameOver(event))

    }
    addBlast() {
        const blastWave = new Wave()
        this.addChild(blastWave)
    }

    resetPositionPlayer() {
        this.pos = new Vector(120, 500)
    }



    // Hoe voeg ik punten toe voor de speler en import ik dit naar de game.js
    // Hoe verlies ik punten voor de speler en import ik dit naar de game.js



    onPostUpdate(engine) {
        this.pos.y = clamp(this.pos.y, 25, 1250)
        this.pos.x = clamp(this.pos.x, 0, 100)

        if (this.health === 0) {
            engine.goToScene('game-over')
        }

        this.graphics.flipHorizontal = true
        let xspeed = 0;
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -500
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 500
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -500
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 500
        }
        this.vel = new Vector(xspeed, yspeed);

        // Shooting or jumping Keys
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            const bullet = new Bullet(this.pos)
            engine.add(bullet)
            this.vel = new Vector(xspeed - 100, yspeed - 100)
            Resources.GunSound.play(0.2)

        }

    }
    // Hoe krijg de huidige functie naar game engine toe?
    loseHealth() {
        this.health = this.health - 20
        this.pos = new Vector(555, 555)
        this.actions.blink(200, 200, 2)
        console.log(`${this.health}`);
    }
    gameOver(event) {
        if (event.other instanceof Freeza) {
            this.loseHealth()
            if (this.health < 0) {
                this.kill()
            }
        }
    }

}