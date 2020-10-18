import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

afterEach(() => {
    document.body.innerHTML = ''
})

describe('Counter', () => {

    const intCounter = (startNumber) => {
        const counter = new Counter('body', startNumber)
        counter.init()

        const getH1 = () => counter.container.querySelector('[data-test=counter__header]')
        const getButton = () => counter.container.querySelector('[data-test=counter__button--inc]')

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

    const intDecreasingCounter = (startNumber) => {
        const counter = new DecreasingCounter('body', startNumber)
        counter.init()

        const getH1 = () => counter.container.querySelector('[data-test=counter__header]')
        const getButtonInc = () => counter.container.querySelector('[data-test=counter__button--inc]')
        const getButtonDec = () => counter.container.querySelector('[data-test=counter__button--dec]')

        const h1 = getH1()
        const buttonInc = getButtonInc()
        const buttonDec = getButtonDec()

        expect(h1).toBeInstanceOf(HTMLHeadingElement)
        expect(buttonInc).toBeInstanceOf(HTMLButtonElement)
        expect(buttonDec).toBeInstanceOf(HTMLButtonElement)

        expect(buttonInc.innerText).toBe('+')
        expect(buttonDec.innerText).toBe('-')

        return { counter, getH1, getButtonInc, getButtonDec }
    }

    it('should render start state', () => {

        const { getH1 } = intDecreasingCounter()

        expect(getH1().innerText).toBe(0)

    })
    
    it('should render start state with 5 number', () => {

        const { getH1 } = intDecreasingCounter(5)

        expect(getH1().innerText).toBe(5)

    })

    it('should render increased value after click', () => {

        const { getH1, getButtonInc } = intDecreasingCounter()

        getButtonInc().click()

        expect(getH1().innerText).toBe(1)

    })

    it('should render 0 value after same amount of inc and dec clicks', () => {

        const { getH1, getButtonInc, getButtonDec } = intDecreasingCounter()

        getButtonInc().click()
        getButtonInc().click()
        getButtonInc().click()
        getButtonDec().click()
        getButtonDec().click()
        getButtonDec().click()

        expect(getH1().innerText).toBe(0)

    })

})