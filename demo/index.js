import { Counter } from '../src/Counter'
import { DecreasingCounter } from '../src/DecreasingCounter'

const counter1 = new Counter('.counter-1')
counter1.init()

const counter2 = new DecreasingCounter('.counter-2')
counter2.init()