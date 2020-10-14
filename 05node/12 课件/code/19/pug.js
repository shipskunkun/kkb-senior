var pug = require('pug');

// Compile a function
var fn = pug.compile('string of pug', options);

// Render the function
var html = fn(locals);
// => '<string>of pug</string>'