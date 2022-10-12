import Matter from "matter-js"
import Chicken from "../components/chicken";
import object from "../components/object";

import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.y = 0.4;

    return {
        physics: { engine, world },

        Chicken: Chicken(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),
    }
}