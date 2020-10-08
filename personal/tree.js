class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = new BST(val);
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new BST(val);
      }
    }
  }

  find(val) {
    if (this.val === val) return this;
    if (this.val > val && this.left) {
      return this.left.find(val);
    } else if (this.right) {
      return this.right.find(val);
    }
    return null;
  }
}

function traverse(tree) {
  if (tree.left) {
    traverse(tree.left);
  }
  console.log(tree.val);
  if (tree.right) {
    traverse(tree.right);
  }
}

function dfs(tree) {
  const visited = [];

  function traverse(tree) {
    console.log(tree.val);
    visited.push(tree.val);
    if (tree.left) {
      traverse(tree.left);
    }

    if (tree.right) {
      traverse(tree.right);
    }
  }

  traverse(tree);
  return visited;
}

function bfs(tree) {
  const queue = [tree];
  const vals = [];
  while (queue.length) {
    let current = queue.shift();
    console.log(current.val);
    vals.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return vals;
}

// const root = new bstNode(20);
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

console.dir(bst, { depth: null });
// console.log('find', bst.find(25));

// traverse(bst);
console.log(bfs(bst));
console.log(dfs(bst));
// console.log(bst.find(11));

module.exports = BST;
