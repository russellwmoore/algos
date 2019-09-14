const { prune } = require('./pruneTree');

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

const pruned = new Tree(0);

pruned.left = new Tree(1);
pruned.right = new Tree(0);
pruned.right.left = new Tree(1);

const treeOfZ = new Tree(0);
treeOfZ.left = new Tree(0);
treeOfZ.right = new Tree(0);

// console.dir(tree, { depth: null });

describe('Prune Tree', () => {
  test('should return a tree', () => {
    expect(prune(tree)).toBeInstanceOf(Tree);
  });

  test('should not create a new instance of Tree', () => {
    expect(tree === prune(tree)).toBe(true);
  });

  test('should prunce the tree', () => {
    expect(tree).toEqual(pruned);
  });

  test('should return null for all prune', () => {
    expect(prune(treeOfZ)).toBe(null);
  });
});
