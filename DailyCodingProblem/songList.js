/**
 * This is your coding interview problem for today.

This problem was asked by Spotify.

You have access to ranked lists of songs for various users. Each song is represented as an integer, and more preferred songs appear earlier in each list. For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

For example, suppose your input is {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}. In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].

We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

Have a great day!
 */

function songList(userSongRatings) {
  const songPoints = {};
  userSongRatings.forEach(rating =>
    rating.forEach((song, i, self) => {
      // get the points for song. i - self.length
      // add that point value to the songPoints at song
      // [1,7,3]
      const pointValue = (self.length - i) / self.length;
      if (songPoints[song] !== undefined) {
        songPoints[song] = songPoints[song] + pointValue;
      } else {
        songPoints[song] = pointValue;
      }
    })
  );
  console.log(songPoints);

  return Object.keys(songPoints).sort((a, b) => songPoints[b] - songPoints[a]);
}

console.log(
  songList([
    [1, 7, 3],
    [2, 1, 6, 7, 9],
    [3, 9, 5],
  ])
);
