import { Actor, Vector } from "excalibur";
// hier krijg je alle basis waarden van alle enemys
export class Enemy extends Actor {
    constructor(enemyType) {
        super({
            width : 200,
            height : 200,
            anchor :new Vector(0.5,0.5),
            radius:50

        })
    }

    
    onInitialize(engine) {
       console.log("Mob is gespawned");

       
    }

    
}