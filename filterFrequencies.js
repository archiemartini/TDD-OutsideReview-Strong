const filterFrequencies = (frequencyArray, lowerLimit = 40, upperLimit = 1000) => {
  let lengthOfArray = frequencyArray.length

  if(lengthOfArray == 1) {
    frequencyArray[0] = filterFrequency(frequencyArray[0], lowerLimit, upperLimit)
    return frequencyArray
  } else if(lengthOfArray == 2) {
    frequencyArray[0] = filterFrequency(frequencyArray[0], lowerLimit, upperLimit)
    frequencyArray[1] = filterFrequency(frequencyArray[1], lowerLimit, upperLimit)
    return frequencyArray
  } else if (lengthOfArray == 3) {
    frequencyArray[0] = filterFrequency(frequencyArray[0], lowerLimit, upperLimit)
    frequencyArray[1] = filterFrequency(frequencyArray[1], lowerLimit, upperLimit)
    frequencyArray[2] = filterFrequency(frequencyArray[2], lowerLimit, upperLimit)
    return frequencyArray
    
  }
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