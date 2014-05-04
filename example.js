var summary = require('./index.js');

summary.summarize('http://www.nytimes.com/2014/05/04/opinion/sunday/president-obama-and-the-world.html', function(title, summary, failure) {
	if (failure) {
		console.log("There was an error.");
	}

    console.log(' - ' + title + ' - ');
	console.log(summary);
});