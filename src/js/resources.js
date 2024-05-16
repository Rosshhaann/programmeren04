import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'
import { Enemy } from './enemy'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Heimer: new ImageSource('images/heimer.png'),
    Gun: new ImageSource('images/gun.png'),
    Bullet: new ImageSource('images/bullet.png'),
    Stars: new ImageSource('images/stars.jpeg',{ wrapping: ImageWrapping.Repeat})
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Heimer,
    Resources.Stars,
    Resources.Gun,
    Resources.Bullet
])

export { Resources, ResourceLoader }