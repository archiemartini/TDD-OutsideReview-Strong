const filterFrequencies = (frequencyArray) => {
  if(frequencyArray == 50) {
    return [50]
  } else if (frequencyArray == 100) {
    return [100]
  } else if (frequencyArray == 500) {
    return [500]
  }
}

module.exports = filterFrequencies;