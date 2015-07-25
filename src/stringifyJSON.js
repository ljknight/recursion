// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return (obj).toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    // there's gotta be a better way to stringify a string?
    return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var arrResults = '[';
      for (var i = 0; i < obj.length; i++) {
        arrResults += stringifyJSON(obj[i]);
        if ((i + 1) < obj.length) {
          arrResults += ',';
        }
      }
      return arrResults + ']';
    } 
  } else if (typeof obj === "object") {
    var objResults = '{';
    var count = 0;
    for (var key in obj) {
      var objKey = stringifyJSON(key);
      var objVal = stringifyJSON(obj[key]);
      if (objVal) {
        if (count === 0) {
          objResults += objKey;
          objResults += ":" + objVal;
        } else {
          objResults += "," + objKey;
          objResults += ":" + objVal;
        }
        count++;
      } 
    }
    return objResults + '}';
  } 
};
