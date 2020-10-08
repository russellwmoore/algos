const BST = require('./tree');

const bst = new BST(20);

bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(30);
bst.insert(40);
bst.insert(25);

//       20
//     /     \
//   10       30
//  /  \     /   \
// 5    11  25   40

console.log(bst);

function summer(tree) {
  let smallest = [];

  const sumHelp = (tree, count = 0) => {
    count += tree.val;

    if (tree.left == null && tree.right == null) {
      smallest.push(count);
      return;
    }

    if (tree.left) {
      sumHelp(tree.left, count);
    }

    if (tree.right) {
      sumHelp(tree.right, count);
    }
  };

  sumHelp(tree);

  return smallest;
}

console.log(summer(bst));

function smallestSum(root) {
  if (!root) {
    return 0;
  }
  let rightSum = root.val + smallestSum(root.right);
  let leftSum = root.val + smallestSum(root.left);
  return Math.min(rightSum, leftSum);
}

console.log(smallestSum(bst));
