import { Scene } from "excalibur";
import { Heimer} from "./player"
import { Background } from "./background";
import { Fish } from "./fish";

export class Level extends Scene {
    onInitialize(engine) {
        const background = new Background()
        this.add(background)

        const heimer = new Heimer()
        this.add(heimer)
    

        for(let i = 0; i < 10 ; i++){
            const smallEnemy = new Fish()
            this.add(smallEnemy)
        }


    }
    onActivate(ctx) {
        console.log("reset het level")
    }

}