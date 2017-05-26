import cards from './cards'

export default function cardType (card) {
  const bin = getBin(card)
  const detectedTypes = []

  cards.forEach(card => {
    card.pattern.forEach(pattern => {
      if (checkCard(bin, pattern)) {
        detectedTypes.unshift(card.name)
      }
    })
  })

  return detectedTypes[0] || ''
}

function getBin (value) {
  return parseInt(value.toString().replace(/\D/g, '').substr(0, 6))
}

function checkCard (bin, pattern) {
  bin = bin.toString()
  return Array.isArray(pattern)
    ? checkRange(bin, pattern)
    : checkPattern(bin, pattern)
}

function checkPattern (bin, pattern) {
  if (pattern instanceof RegExp) {
    return pattern.test(bin)
  }

  pattern = pattern.toString()
  return bin.substr(0, pattern.length) === pattern
}

function checkRange (bin, [ min, max ]) {
  const length = min.toString().length
  const value = parseInt(bin.substr(0, length))

  return value >= min && value <= max
}
