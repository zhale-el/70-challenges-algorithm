function countOccurrences(str, char) {
  //case insensitive
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
