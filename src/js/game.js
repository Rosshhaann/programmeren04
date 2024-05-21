import '../css/style.css'
import { Actor, BoundingBox, CollisionType, Color, CoordPlane, DisplayMode, EaseTo, Engine, Follow, Font, FontUnit, KillEvent, Label, RepeatForever, RotationType, SolverStrategy, Vector, VectorView } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background} from './background.js'
import { Goku } from './goku.js'
import { Enemy } from './enemy.js'
import { Freeza } from "./freeza.js";
import { Level } from './level.js'
import { Gameover } from './gameover.js'
import { Gamewon } from './gamewon.js'

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

    score = 0
    
    startGame() {
            this.add('level', new Level())
   
            // Maak nog de classes aan en voeg de waardes toe.
            this.add('game-won', new Gamewon())
            this.add('game-over', new Gameover())
         

            // go to the next level add a class and scene with level-2
            this.goToScene('level')
 
    }

    showScore(){
        const scoreLabel = new Label({
            text: "Score: " + this.score,
            pos: new Vector(80, 50)
        });
        scoreLabel.font.quality = 4;
        scoreLabel.font.size = 30;
        scoreLabel.font.unit = FontUnit.Px;
        scoreLabel.font.family = "Open Sans";
        scoreLabel.transform.coordPlane = CoordPlane.Screen;
        scoreLabel.color = Color.Azure;
        scoreLabel.on('preupdate', (evt) => {
            scoreLabel.text = "Score: " + this.score;
        });
        this.add(scoreLabel);
    }
}

new Game()