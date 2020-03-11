// This problem was asked by Twitter.

// A classroom consists of N students, whose friendships can be represented in an adjacency list.For example, the following descibes a situation where 0 is friends with 1 and 2, 3 is friends with 6, and so on.

// {
//   0: [1, 2],
//   1: [0, 5],
//   2: [0],
//   3: [6],
//   4: [],
//   5: [1],
//   6: [3]
// }
// Each student can be placed in a friend group, which can be defined as the transitive closure of that student's friendship relations. In other words, this is the smallest set such that no student in the group has any friends outside this group. For the example above, the friend groups would be {0, 1, 2, 5}, {3, 6}, {4}.

// Given a friendship list such as the one above, determine the number of friend groups in the class.

const friendGroup = list => {
  const groups = [];
  const visited = {};
  const friends = Object.keys(list);
  let queue = [];

  for (let i = 0; i < friends.length; ++i) {
    // go through all nodes
    if (!(friends[i] in visited)) {
      // if we haven't visited
      let smallFriendGroup = [Number(friends[i])];
      visited[friends[i]] = true; // we visited a node
      queue = [friends[i]]; // initialize queue
      while (queue.length) {
        let node = queue.shift(); // get first from list
        list[node].forEach(f => {
          // for each friend
          if (!(f in visited)) {
            // if we haven't visited
            visited[f] = true; // mark visited
            smallFriendGroup.push(f); // put into small group
            queue.push(f); // add them to queue to process
          }
        });
      }
      groups.push(smallFriendGroup);
    }
  }

  return groups;
  // iterate through nodes
  // if node hasn't been visited, bfs through group
  //bfs through group.
  // if node hasn't been visited add it to group
  // add all non visited children to subarray
};

const data = {
  0: [1, 2],
  1: [0, 5],
  2: [0],
  3: [6],
  4: [],
  5: [1],
  6: [3],
};

console.log(friendGroup(data));
