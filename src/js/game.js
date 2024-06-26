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
import { Home } from './home.js'

export class Game extends Engine {
  
    scoreLabel
    /**
     * @type Level
     */
    level
    score 
    health
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
        this.add('home', new Home())
        this.add('game-won', new Gamewon())
        this.add('game-over', new Gameover())


        this.goToScene('home')

    }
    updateScore(score){
        this.level?.ui?.updateScore(score)
    }



 
}

new Game()