const ops = (str1, str2) => {
  const str1map = {}
  const str2map = {}

  for(let i = 0; i < str1.length; ++i) {
    if(str1[i] in str1map) str1map[str1[i]]++
    else str1map[str1[i]]=1
  }

  for (let j = 0; j < str2.length; ++j) {
    if (str2[j] in str2map) str2map[str2[j]]++
    else str2map[str2[j]] = 1
  }
  
  for (const key in str1map) {
    if(str1map[key] === str2map[key]) {
      str1map[key] = 0
      str2map[key] = 0
    }
  }  

  let add1 = Object.values(str1map)
              .reduce((accum, curr)=> {
                return accum + curr
              },0)
  let add2 = Object.values(str2map)
              .reduce((accum, curr)=> {
                return accum + curr
              })
  return Math.max(add1, add2)
}


module.exports = {ops}