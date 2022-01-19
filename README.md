# round-discrete-distibution
Sum plain arrays and object arrays cause it can accept a second optional parameter that parse array value.
So it accept a parser method so can accept number arrays
`[1, 4, 2, 3]`
and other type of content like object arrays
```json
    [
      {
		....
    	"WHATEVER2": 1
      },
      ...
    ]
```

## Install

`npm install --save sum-any-array`

## Usage
### sumArray
This method sums an array that could be an array of objects if parse function is provided.
```javascript
import { sumArray } from 'round-discrete-population';

const numberArray = [1, 4, 2, 3];

const sum = sumArray(numberArray);

console.log(sum);
/*
10
*/
```
Using object array:
```javascript
import { sumArray } from 'round-discrete-population';

const objArray = [
      {
        "name": "👨‍⚕️",
        "value": 1
      },
      {
        "name": "👩‍🏫",
        "value": 4
      },
	  {
        "name": "👨‍🍳",
        "value": 3
      },
      {
        "name": "👩‍🔧",
        "value": 2
      },
    ];
const getValue = (item) => item.value;

const sum = sumArray(objArray, getValue);

console.log(sum);
/*
10
*/
```

Using string array:
```javascript
import { sumArray } from 'round-discrete-population';

const strArray = ['a','b','ee'],;
const strLength = (str) => str.length;

const sum = sumArray(strArray, getValue);

console.log(sum);
/*
4
*/
```
## License
MIT

