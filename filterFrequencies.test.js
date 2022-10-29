const filterFrequencies = require('./filterFrequencies')

describe('the filterFrequencies function', () => {

  describe('the passing of single in range frequencies', () => {
    
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

  describe('the passing of frequencies below the default lowerLimit of 40', () => {
    
    it('filters 35 frequency correctly', () => {
      expect(filterFrequencies([35])).toEqual([40])
    })
  
    it('filters the number 1 correctly', () => {
      expect(filterFrequencies([1])).toEqual([40])
    })
  
    it('filters 39.9 correctly', () => {
      expect(filterFrequencies([39.9])).toEqual([40])
    })

  })
  
  describe('the passing of frequencies above the default upperLimit of 1000', () => {
    
      it('filters 1500 correctly', () => {
        expect(filterFrequencies([1500])).toEqual([1000])
      })
    
      it('filters 1250 correctly', () => {
        expect(filterFrequencies([1250])).toEqual([1000])
      })
    
      it('filters 1001 correctly', () => {
        expect(filterFrequencies([1001])).toEqual([1000])
      })
    
  })

  describe('the passing of frequencies below a personalised limits', () => {

    it('function correctly filters to a personalised lowerLimit', () => {
      expect(filterFrequencies([30], 80)).toEqual([80])
    })
    
    it('function correctly filters to a personalised upperLimit', () => {
      expect(filterFrequencies([1200], 80, 800)).toEqual([800])
    })
 
  })

  describe('filtering multiple element arrays correctly', () => {
    
    it('filters 2 element array correctly', () => {
      expect(filterFrequencies([50, 1500])).toEqual([50, 1000])
    })
  
    it('filters 3 element array correctly', () => {
      expect(filterFrequencies([50, 1500, 1])).toEqual([50, 1000, 40])
    })

    it('filters the given input (see README) example correctly', () => {
      expect(filterFrequencies([60,10,45,60,1500], 20, 50)).toEqual([50,20,45,50,50])
    })
  })

  describe('errors implemented for described edgecases', () => {
    
      it('throw a new error when the first argument is not an array', () => {
        expect(() => {filterFrequencies("Hello", 20, 50)}).toThrowError("Argument Error: first argument must be an array")
      })
    
      it('throws a new error when a frequency is below 0', () => {
        expect(() => {filterFrequencies([-1])}).toThrowError("Value Error: frequencies must be above 0")
      })
    
      it('throw an error if one of the passed frequencies is neither an integer or a floating point', () => {
        expect(() => {filterFrequencies(["hello"])}).toThrowError("Argument Error: frequencies must only be integers or floating points")
      })
    
  })

})