Brief:
- digital audio workstation plugins
- band pass filter
- three inputs: musicTrack, lowerLimit, upperLimit
lowerLimit=40, upperLimit=1000

Input => Output
[60,10,45,60,1500],20,50 => [50,20,45,50,50]
[-15], 20, 50 => *Value Error*
"Hello", 20, 50 => *Argument Error*
["Hello"] => *Argument Error*
[10, 1500] => [40, 1000]