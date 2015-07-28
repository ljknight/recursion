// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var result = [];  

  var checkChildren = function(node) {
    var children = node.childNodes;  // creates array of node's children
    for (var i = 0; i < children.length; i++) {
      if (children[i].classList) {  // checks if element has classes
        if (children[i].classList.contains(className)) {
          result.push(children[i]);
        }
      } 
    checkChildren(node.childNodes[i]);  // searches for className on each child element further down the DOM tree
    }
  };
  checkChildren(document);
  return result;
};
