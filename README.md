# node-sumuparticles
Node module summarizing web-articles using a naive algorithm, based off [node-summary](https://github.com/jbrooksuk/node-summary/). Even if it's based off node-summary it was rewritten and now only shares approximately 5% lines of code.

## Algorithm
The algorithm used is explained [here](http://thetokenizer.com/2013/04/28/build-your-own-summary-tool/). The intersections are calculated between all sentences instead between all sentences per paragraph.

## Demo

[elefeed.us/summary](https://elefeed.us/summary)

## Install

```
npm install node-sumuparticles
```

## Usage
    
```javascript
var summary = require('node-sumuparticles');
summary.summarize(url, function(title, summary, failure) {
	if (failure) {
		console.log("There was an error.");
	}

    console.log(title);
	console.log(summary);
});
```

## API

### summary.summarize(object, [options], callback(title, summary, failure))

For *object* you can either pass a string containing an URL, or an already fetched cheerio object.

### Possible options:
`maxAnalyzedSentences` - Maximal number of sentences to be processed in the rank analysis. The analysis performs Cartesian join of sentences, giving  O(n^2) complexity. Hence processing large articles without limitation can lead to extremely high CPU load.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
