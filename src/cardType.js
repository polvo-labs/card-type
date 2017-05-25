import cards from './cards'

export default function cardType (card) {
  const bin = parseInt(
    card.toString().replace(/\D/g, '').substr(0, 6)
  )
  const detectedTypes = []

  Object.keys(cards).forEach(type => {
    const patterns = cards[type]
    patterns.forEach(pattern => {
      if (checkCard(bin, pattern)) {
        detectedTypes.unshift(type)
      }
    })
  })

  return detectedTypes[0] || ''
}

function checkCard (bin, pattern) {
  return Array.isArray(pattern)
    ? checkRange(bin, pattern)
    : checkPattern(bin, pattern)
}

function checkPattern (bin, pattern) {
  bin = bin.toString()

  if (pattern instanceof RegExp) {
    return pattern.test(bin)
  }

  pattern = pattern.toString()
  return bin.substr(0, pattern.length) === pattern
}

function checkRange (bin, [min, max]) {
  bin = bin.toString()
  min = parseInt(min)
  max = parseInt(max)

  const length = min.toString().length
  const value = parseInt(bin.substr(0, length))

  return value >= min && value <= max
}
