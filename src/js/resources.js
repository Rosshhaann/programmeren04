import { ImageSource, Sound, Resource, Loader, ImageWrapping, FontSource } from 'excalibur'
import { Enemy } from './enemy'

const Resources = {
    Freeza: new ImageSource('images/freeza.png'),
    FreezaGreetings: new Sound('freezagreetings.mp3'),
    Goku: new ImageSource('images/goku.png'),
    UpDownAnimation: new ImageSource('images/goku-spritesheet.png'),
    LeftAnimation:new ImageSource('images/goku-spritesheet-left.png'),
    Wave: new ImageSource('images/gun.png'),
    GunSound:new Sound("kiblast.mp3"),
    Bullet: new ImageSource('images/bullet.png'),
    Stars: new ImageSource('images/stars.jpeg',{ wrapping: ImageWrapping.Repeat}),
    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart')
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }