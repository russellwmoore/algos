/*

This problem was asked by LinkedIn.

Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

For example, given the list of points [[0, 0], [5, 4], [3, 1]], the central point [1, 2], and k = 2, return [[0, 0], [3, 1]].
*/

function kClosestPoints(list, point, k) {
  list.sort((a, b) => {
    let aDist = (a[0] - point[0]) ** 2 + (a[1] - point[1]) ** 2;
    let bDist = (b[0] - point[0]) ** 2 + (b[1] - point[1]) ** 2;
    return aDist - bDist;
  });

  console.log(process.cwd());
  return list.slice(0, k);
}

module.exports = { kClosestPoints };
