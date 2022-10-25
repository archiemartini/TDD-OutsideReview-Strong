const filterFrequencies = (frequencyArray, lowerLimit = 40, upperLimit = 1000) => {
  let lengthOfArray = frequencyArray.length

  if(lengthOfArray == 1) {
    if(frequencyArray < lowerLimit) {
      return [lowerLimit]
    } else if (frequencyArray > upperLimit) {
      return [upperLimit]
    }
    return frequencyArray
  } else if(lengthOfArray == 2) {
    if(frequencyArray[0] < lowerLimit) {
      frequencyArray[0] = lowerLimit
    } else if (frequencyArray[0] > upperLimit) {
      frequencyArray[0] = upperLimit
    }
    if(frequencyArray[1] < lowerLimit) {
      frequencyArray[1] = lowerLimit
    } else if (frequencyArray[1] > upperLimit) {
      frequencyArray[1] = upperLimit
    }
    return frequencyArray
  }
}

module.exports = filterFrequencies;