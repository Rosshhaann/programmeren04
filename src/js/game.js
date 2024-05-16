import '../css/style.css'
import { Actor, BoundingBox, CollisionType, Color, DisplayMode, EaseTo, Engine, Follow, Font, KillEvent, Label, RepeatForever, RotationType, SolverStrategy, Vector, VectorView } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background} from './background.js'
import { Heimer } from './player.js'
import { Enemy } from './enemy.js'
import { Fish } from './fish.js'
import { Level } from './level.js'
import { Gameover } from './gameover.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1920, 
            height: 1080,
            backgroundColor:Color.Blue,
            displayMode: DisplayMode.FillScreen,
        })
        this.start(ResourceLoader).then(() => this.startGame())
            

    }


    
    startGame() {
            this.add('level', new Level())

            // Maak nog de classes aan en voeg de waardes toe.
            // this.add('game-won', new Gamewon())
            this.add('game-over', new Gameover())
            this.goToScene('level')

        // console.log("start de game!")



    }
}

new Game()