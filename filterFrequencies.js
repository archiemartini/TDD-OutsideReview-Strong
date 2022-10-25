const filterFrequencies = (frequencyArray, lowerLimit = 40) => {
  if(frequencyArray < lowerLimit) {
    return [lowerLimit]
  } else if (frequencyArray > 1000) {
    return [1000]
  }
  return frequencyArray
}

module.exports = filterFrequencies;