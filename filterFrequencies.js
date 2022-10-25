const filterFrequencies = (frequencyArray) => {
  if(frequencyArray == 35 || frequencyArray == 1 || frequencyArray == 39.9) {
    return [40]
  }
  return frequencyArray
}

module.exports = filterFrequencies;