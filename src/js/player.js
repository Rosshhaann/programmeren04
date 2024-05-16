import { Actor, CollisionType, Color, DisplayMode, Engine, Font, Keys, Label, Vector, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Gun } from "./gun.js";
import { Fish } from "./fish.js";

export class Heimer extends Actor {
    
    constructor() {
        super({
            anchor: new Vector(0.5, 0.5),
            width: Resources.Heimer.width,
            height: Resources.Heimer.height,

        })
      
    }

    life
    
    onInitialize(engine) {
        this.graphics.use(Resources.Heimer.toSprite())
        this.pos = new Vector(0, 400)
        this.vel = new Vector(0, 0)
        this.addWeapon()
        this.on("exitviewport", () => this.resetPositionPlayer())
        this.on("collisionstart", (event) => this.gameOver(event))
        // Geef de player 3 levens en zet de score op 0
        this.life = 3 

    }
    addWeapon() {
        const weapon = new Gun()
        this.addChild(weapon)
    }

    resetPositionPlayer() {
        this.pos = new Vector(120, 120)
    }



    // Hoe voeg ik punten toe voor de speler en import ik dit naar de game.js
    // Hoe verlies ik punten voor de speler en import ik dit naar de game.js



    onPostUpdate(engine) {
        if(this.life === 0){
            engine.goToScene('game-over')
        }

        this.graphics.flipHorizontal = true
        let xspeed = 0;
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -500;
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 500;
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
        }

    }
    // Hoe krijg de huidige functie naar game engine toe?
    loseLife(){
        this.life--
        this.pos = new Vector(555,555)
        this.actions.blink(200,200,2)
        console.log(`${this.life}`);
    }
    gameOver(event) {
        if (event.other instanceof Fish) {
            this.loseLife()
            if(this.life < 0){
                this.kill()
            }
        }
    }

}