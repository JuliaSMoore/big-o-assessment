arr1 = [1, 2, 3, 4, 5, 0];
const addToZero = (arr) => {
  let zero = false;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[j] + arr[i] === 0 && j !== i) {
        zero = true;
      }
    }
    return zero;
  }
};
console.log(addToZero(arr1));

//Runtime complexity: O(n^2)
//Space complexity: O(1)

let hasUniqueCharacter = (word) => {
  return new Set(word).size === word.length;
};

console.log(hasUniqueCharacter(`Monday`));

//Runtime complexity: O(n)
//Space complexity: O(1)

const isPangram = (str) => {
  let str2 = str
    .replace(/ /g, "")
    .toLowerCase()
    .replace(/[^\w\s]/gi, "");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabet.split("");
  for (let i = 0; i < str2.length; i++) {
    let index = alphaArr.indexOf(str2[i]);
    if (index !== -1) {
      alphaArr.splice(index, 1);
    }
  }
  return !alphaArr.length;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

//Runtime complexity: O(n^2)
// Space complexity: O(n)

const longestWord = (arr) => {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word.length;
};

console.log(longestWord(["boop", "bloomburg", "hello"]));

//Runtime complexity: O(n)
//Space complexity: O(n)