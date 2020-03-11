const balanced = str => {
  const stack = [];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(str[i]);
    }
  }
  return stack.length === 0;
};

module.exports = { balanced };
