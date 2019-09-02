function urlify(str) {
  str = str.trim();
  return str.split(' ').join('%20');
}

module.exports = { urlify };
