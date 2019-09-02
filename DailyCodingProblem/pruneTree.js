// Given a binary tree where all nodes are either 0 or 1,
// prune the tree so that subtrees containing all 0s are
// removed.

// For example, given the following tree:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  0   0
// should be pruned to:

//    0
//   / \
//  1   0
//     /
//    1
// We do not remove the tree at the root or its left
// child because it still has a 1 as a descendant.

class Tree {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const tree = new Tree(0);

tree.left = new Tree(1);
tree.right = new Tree(0);
tree.right.left = new Tree(1);
tree.right.right = new Tree(0);

tree.right.left.right = new Tree(0);
tree.right.left.left = new Tree(0);

console.dir(tree, { depth: null });

function prune(tree) {
  function helper(tree) {
    if (!tree) return false;
    if (!tree.left && !tree.right) {
      if (tree.val === 0) return true;
      else return false;
    }

    let removeL = helper(tree.left);
    let removeR = helper(tree.right);

    if (removeL) tree.left = null;
    if (removeR) tree.right = null;
    return !tree.left && !tree.right && tree.val === 0;
  }

  const isNull = helper(tree);
  console.dir(tree, { depth: null });
  return isNull ? null : tree;
}

prune(tree);
