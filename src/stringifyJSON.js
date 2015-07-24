// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    // there's gotta be a better way to stringify a string?
    return '\"' + obj + '\"';
  }


};
