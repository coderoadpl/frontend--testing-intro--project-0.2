# @coderoadpl/counters

Package with two counters `Counter` and `DecreasingCounter` constructors.

## Installation

```
npm install @coderoadpl/counters
```

## Usage

To run demo app clone this repo and simply run:

```
npm install
```

```
npm start
```

## API

Every counter gets one argument - selector of element to be rendered in.
Counter should be initialized after creation by calling `.init()` method.

```javascript
import { Counter, DecreasingCounter } from '@coderoadpl/counters'

const counter1 = new Counter('.counter-1')
counter1.init()

const counter2 = new DecreasingCounter('.counter-2')
counter2.init()
```