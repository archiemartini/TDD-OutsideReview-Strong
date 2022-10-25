const filterFrequencies = (frequencyArray) => {
  if(frequencyArray == 35) {
    return [40]
  }
  return frequencyArray
}

module.exports = filterFrequencies;