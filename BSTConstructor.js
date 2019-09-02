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

//       20
//     /     \
//   10       30
//  /  \     /   \
// 5    11  25   40

module.exports = BST;
