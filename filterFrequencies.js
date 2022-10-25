const filterFrequencies = (frequencyArray, lowerLimit = 40, upperLimit = 1000) => {
  if(frequencyArray < lowerLimit) {
    return [lowerLimit]
  } else if (frequencyArray > upperLimit) {
    return [upperLimit]
  }
  return frequencyArray
}

module.exports = filterFrequencies;