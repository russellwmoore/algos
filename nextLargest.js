const bst = require('./treeConstructor');

console.log(bst);

//       20
//     /     \
//   10       30
//  /  \     /   \
// 5    11  25   40

// 19 => 11
//
const findSmallestLargest = (tree, val) => {
  let sl = -1;
  let currNode = tree;
  while (currNode) {
    if (currNode.val > val) {
      currNode = currNode.left;
    } else {
      sl = currNode.val;
      console.log('sl', sl);
      currNode = currNode.right;
    }
  }
  return sl;
};

console.log(findSmallestLargest(bst, 19));
