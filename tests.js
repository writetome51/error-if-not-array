let errorIfNotArray = require('./index').errorIfNotArray;

errorIfNotArray([]);
console.log('test 1 passed');

// Each of these lines should cause error.
// errorIfNotArray({});
// errorIfNotArray(true);
// errorIfNotArray('');
// errorIfNotArray(1);
