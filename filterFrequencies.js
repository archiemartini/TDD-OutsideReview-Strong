const filterFrequencies = (frequencyArray, lowerLimit = 40, upperLimit = 1000) => {
  if(!Array.isArray(frequencyArray)) {
    throw new Error("Argument Error: first argument must be an array")
  }
    return frequencyArray.map((frequency) => {
      if(frequency < 0) {
        throw new Error("Value Error: frequencies must be above 0")
      } else if(!isFloatOrInteger(frequency)) {
        throw new Error("Argument Error: frequencies must only be integers or floating points")
      }
      return filterFrequency(frequency, lowerLimit, upperLimit)
    })

}

const isFloatOrInteger = (value) => {
  if(typeof value == 'number' && !isNaN(value)) {
    return true
  }
  return false
}

const filterFrequency = (frequency, lowerLimit, upperLimit) => {
  if(frequency < lowerLimit) {
    return lowerLimit
  } else if (frequency > upperLimit) {
    return upperLimit
  }
  return frequency
}

module.exports = filterFrequencies;