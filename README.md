# card-type

Another module for card detection, with special attention
for brazilian cards like **Elo** and **Hipercard**.

## supported cards

* Visa
* Mastercard
* American Express
* Diners Club
* Discover
* Elo
* Hipercard

## installation

You can install it through NPM:

`npm install polvo-labs/card-type --save`

Or you can just copy `dist/card-type.js` and include it into your project.

## usage

```js
// ES6
import { cardType, cards } from 'card-type'

// CommonJS
var cardType = require('card-type').cardType
var cards = require('card-type').cards

// Global
var cardType = window.CardType.cardType
var cards = window.CardType.cards
```

> **NOTE:** You don't need to import `cards` unless you want to extend it and include your own cards and patterns.

## api

#### `cardType (number) => String`

The function that returns your card type.

```js
cardType(4) // 'visa'
cardType('5143 5709 0399 4704') // 'mastercard'
cardType(384140) // 'hipercard'
cardType('00000') // ''
```

#### `cards : Object`

An object with cards patterns and ranges. You can extend it and include your
own cards.

```js
cards.someNewCard = [
  777,
  [8900, 8950]
]

cardType('777') // 'someNewCard'
cardType(777123456789) // 'someNewCard'
cardType(8900) // 'someNewCard'
cardType('89250251') // 'someNewCard'
```

## tests

Make sure to install all dependencies:

`npm install`

Then, just run:

`npm test`

## contribution

Did you miss a card? Contributions are welcome!
