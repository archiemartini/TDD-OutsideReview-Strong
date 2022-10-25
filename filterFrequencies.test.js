const filterFrequencies = require('./filterFrequencies')

describe('the filterFrequencies function', () => {
  
  it('a inrange frequency is passed correctly', () => {
    expect(filterFrequencies([50])).toEqual([50])
  })

})