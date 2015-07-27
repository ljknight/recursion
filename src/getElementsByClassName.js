// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var bodyChildren = document.body.childNodes;

  // check each element for className (if yes, then push) & check for children >> this is the recursion on each element in the tree
  
  for (var i = 0; i < bodyChildren.length; i++) {
    if (bodyChildren[i].classList && bodyChildren[i].classList.length > 0) {
      //console.log(bodyChildren[i].classList);
      if (bodyChildren[i].classList.contains(className)) {
        //console.log(bodyChildren[i]);
      }
    }
    /*if (bodyChildren[i].classList.contains(className)) {
      result.push(bodyChildren[i]);
    }*/
    /*
    if (bodyChildren[i].childNodes.length > 0) {
      console.log(bodyChildren[i].childNodes);
    }*/
  }

  //return result;
};

getElementsByClassName('container-fluid');
