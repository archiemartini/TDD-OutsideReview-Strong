const filterFrequencies = (frequencyArray, lowerLimit = 40, upperLimit = 1000) => {
  if(!Array.isArray(frequencyArray)) {
    throw new Error("Argument Error: first argument must be an array")
  }
    return frequencyArray.map((frequency) => {
      return filterFrequency(frequency, lowerLimit, upperLimit)
    })

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