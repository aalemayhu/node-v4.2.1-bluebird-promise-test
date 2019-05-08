var Promise = require('bluebird');

const justResolveIt = function() {
  return new Promise(function(resolve) {
    resolve('Here it is!;');
  });
};


justResolveIt().then(console.log);
