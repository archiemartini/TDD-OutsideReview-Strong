const filterFrequencies = require('./filterFrequencies')

describe('the filterFrequencies function', () => {
  
  it('a inrange frequency is passed correctly', () => {
    expect(filterFrequencies([50])).toEqual([50])
  })

  it('a different in range frequency is passed correctly', () => {
    expect(filterFrequencies([100])).toEqual([100])
  })

  it('passes ANOTHER frequency correctly', () => {
    expect(filterFrequencies([500])).toEqual([500])
  })

})