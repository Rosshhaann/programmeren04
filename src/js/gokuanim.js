import { Resources } from "./resources";
import { SpriteSheet } from "excalibur";
import * as ex from "excalibur" 

const UpDownAnimation = SpriteSheet.fromImageSource({
    image: Resources.UpDownAnimation,
    grid: {
        rows:1,
        columns:7,
        spriteWidth:125,
        spriteHeight:200
    }
})
const LeftAnimation = SpriteSheet.fromImageSource({
    image: Resources.LeftAnimation,
    grid:{
        rows:1,
        columns:2,
        spriteWidth:180,
        spriteHeight:180
    }
})
const neutAnim = ex.Animation.fromSpriteSheet(UpDownAnimation,[3],80)
const upAnim = ex.Animation.fromSpriteSheet(UpDownAnimation,[1],80)
const downAnim = ex.Animation.fromSpriteSheet(UpDownAnimation,[5],80)
const leftAnim = ex.Animation.fromSpriteSheet(LeftAnimation,[0],80)

export const gokuanim = {
    upAnim,
    downAnim,
    leftAnim,
    neutAnim
}

export default gokuanim