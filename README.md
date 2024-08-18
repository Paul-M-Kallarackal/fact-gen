# fact-gen

A simple npm package that generates random facts.

## Installation

```bash
npm install fact-gen
```


## API

### FactGenerator
You can use this to generate random facts for different use-cases like loading screens in your video games or for placeholders in your Javascript applications


#### Methods

##### `fact()`

Generates and returns a random fact.

## Example

```javascript
const FactGenerator = require('fact-gen');

const generator = new FactGenerator();
const randomFact = generator.fact();
console.log(randomFact);
```

Output:
```
Did you know that a group of flamingos is called a 'flamboyance'? Talk about fabulous!
```
