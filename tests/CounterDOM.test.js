import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'


describe('Counter', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    const intCounter = (startNumber) => {
        const counter = new Counter('body', startNumber)
        counter.init()

        const getH1 = () => counter.container.querySelector('h1')
        const getButton = () => counter.container.querySelector('button')

        const h1 = getH1()
        const button = getButton()

        expect(h1).toBeInstanceOf(HTMLHeadingElement)
        expect(button).toBeInstanceOf(HTMLButtonElement)

        expect(button.innerText).toBe('+')

        return { counter, getH1, getButton }
    }

    it('should render start state', () => {

        const { getH1 } = intCounter()

        expect(getH1().innerText).toBe(0)

    })

    it('should render start state with 5 number', () => {

        const { getH1 } = intCounter(5)

        expect(getH1().innerText).toBe(5)

    })

    it('should render increased value after click', () => {

        const { getH1, getButton } = intCounter()

        getButton().click()

        expect(getH1().innerText).toBe(1)

    })

    it('should render increased by 3 value after 3 click', () => {

        const { getH1, getButton } = intCounter()

        getButton().click()
        getButton().click()
        getButton().click()

        expect(getH1().innerText).toBe(3)

    })

    it('should render increased value after direct `.inc` call', () => {

        const { getH1, counter } = intCounter()

        counter.inc()

        expect(getH1().innerText).toBe(1)

    })

})

describe('DecreasingCounter', () => {

})