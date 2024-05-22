import '../css/style.css'
import { Actor, BoundingBox, CollisionType, Color, CoordPlane, DisplayMode, EaseTo, Engine, Follow, Font, FontUnit, KillEvent, Label, RepeatForever, RotationType, SolverStrategy, Vector, VectorView } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Goku } from './goku.js'
import { Enemy } from './enemy.js'
import { Freeza } from "./freeza.js";
import { Level } from './level.js'
import { Gameover } from './gameover.js'
import { Gamewon } from './gamewon.js'

export class Game extends Engine {
  
    scoreLabel
    /**
     * @type Level
     */
    level
    score 
    constructor() {
        super({
            width: 1920,
            height: 1080,
            backgroundColor: Color.Blue,
            displayMode: DisplayMode.FillScreen,
        })
        this.start(ResourceLoader).then(() => this.startGame())

    }

  
 

    startGame() {

        this.level = new Level ()
        this.add('level', this.level)

        // Maak nog de classes aan en voeg de waardes toe.
        this.add('game-won', new Gamewon())
        this.add('game-over', new Gameover())


        // go to the next level add a class and scene with level-2
        this.goToScene('level')

    }
    updateScore(score){
        this.level?.ui?.updateScore(score)
    }



 
}

new Game()