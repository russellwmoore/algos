class Heap {
  constructor() {
    this.vals = [];
  }
  insert(num) {
    this.vals.push(num);
    // bubble
    // compare to parent until the parent is larger
    let newIdx = this.vals.length - 1;
    let parent = Math.floor((newIdx - 1) / 2);
    while (this.vals[parent] < this.vals[newIdx]) {
      [this.vals[parent], this.vals[newIdx]] = [
        this.vals[newIdx],
        this.vals[parent],
      ];
      newIdx = parent;
      parent = Math.floor((newIdx - 1) / 2);
    }
    return this.vals;
  }

  remove() {
    const max = this.vals[0];
    let min = this.vals.pop();
    this.vals[0] = min;
    let parent = 0;
    let leftChild = 1;
    let rightChild = 2;
    let len = this.vals.length;
    while (leftChild < len || rightChild < len) {
      if (this.vals[leftChild] > this.vals[rightChild]) {
        [this.vals[parent], this.vals[leftChild]] = [
          this.vals[leftChild],
          this.vals[parent],
        ];
        parent = leftChild;
      } else {
        [this.vals[parent], this.vals[rightChild]] = [
          this.vals[rightChild],
          this.vals[parent],
        ];
        parent = rightChild;
      }
      leftChild = parent * 2 + 1;
      rightChild = parent * 2 + 2;
    }

    // the root is now the smallest value
    // compare this value with each next largest value and keep swapping until there are no children
    return max;
  }
}

//       100
//     /     \
//   50       19
//  /  \     /  \
// 30   4   10   18

// [100, 50, 19, 30, 4, 10, 18]
//  0   1   2   3   4  5   6
// parent to child = 2n + 1, 2n + 2
// child to parent = Math.floor(n - 1 / 2)

const maxHeap = new Heap();
// maxHeap.insert(100);
// maxHeap.insert(50);
maxHeap.insert(19);
maxHeap.insert(30);
maxHeap.insert(4);
maxHeap.insert(10);
maxHeap.insert(18);
maxHeap.insert(101);
maxHeap.insert(0);

console.log(maxHeap.vals);
console.log(maxHeap.remove());
console.log(maxHeap.vals);
