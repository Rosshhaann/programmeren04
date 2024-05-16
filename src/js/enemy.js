import { Actor, Vector } from "excalibur";
// hier krijg je alle basis waarden van alle enemys
export class Enemy extends Actor {
    constructor(enemyType) {
        super({
            width : 100,
            height : 100,
            anchor :new Vector(0.5,0.5)
        })
    }

    
    onInitialize(engine) {
       console.log("Mob is gespawned");

       
    }

    
}