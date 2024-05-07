import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Heimer: new ImageSource('images/heimer.png'),
    Stars: new ImageSource('images/stars.jpeg')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Heimer,
    Resources.Stars
])

export { Resources, ResourceLoader }