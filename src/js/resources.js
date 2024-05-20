import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'
import { Enemy } from './enemy'

const Resources = {
    Freeza: new ImageSource('images/freeza.png'),
    FreezaGreetings: new Sound('freezagreetings.mp3'),
    Goku: new ImageSource('images/goku.png'),
    Wave: new ImageSource('images/gun.png'),
    GunSound:new Sound("kiblast.mp3"),
    Bullet: new ImageSource('images/bullet.png'),
    Stars: new ImageSource('images/stars.jpeg',{ wrapping: ImageWrapping.Repeat})
}
const ResourceLoader = new Loader([
    Resources.Freeza,
    Resources.FreezaGreetings,
    Resources.Goku,
    Resources.Stars,
    Resources.Wave,
    Resources.GunSound,
    Resources.Bullet
])

export { Resources, ResourceLoader }