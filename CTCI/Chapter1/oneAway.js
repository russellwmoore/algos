// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bake => false
function oneAway(str1, str2) {
  if (str1 === str2) return true;

  const longer = str1.length >= str2.length ? str1 : str2;
  const shorter = str1.length >= str2.length ? str2 : str1;
  const freq = {};
  let oneEdit = 0;
  for (let i = 0; i < longer.length; i++) {
    const curr = longer[i];
    if (curr in freq) freq[curr]++;
    else freq[curr] = 1;
  }

  for (let j = 0; j < shorter.length; j++) {
    if (oneEdit > 1) return false;
    const curr = shorter[j];
    if (!(curr in freq)) oneEdit++;
    else {
      freq[curr]--;
      if (freq[curr] < 0) return false;
    }
  }
  return true;
}

module.exports = { oneAway };
