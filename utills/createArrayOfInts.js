const createArrayOfInts = (length, lowBound, highBound) => {
  const res = [];

  for (let i = 0; i < length; i++) {
    const ran = Math.floor(Math.random() * (highBound - lowBound) + lowBound);
    res.push(ran);
  }
  return res;
};

module.exports = { createArrayOfInts };
