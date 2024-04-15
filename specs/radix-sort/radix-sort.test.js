/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
function getDigit(number, place, longestNumber) {
  const strNum = number.toString();
  const size = strNum.length;

  const mod = longestNumber - size;
  return strNum[place - mod] || 0;
}

function getLongestNumber(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const ele = array[i].toString();
    max = ele.length > max ? ele.length : max;
  }
  return max;
}

function radixSort(array) {
  // code goes here
  const longestNumber = getLongestNumber(array);

  const bucket = new Array(10).fill().map(() => []);
  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const ele = array.shift();
      bucket[getDigit(ele, i, longestNumber)].push(ele);
    }

    for (let i = 0; i < bucket.length; i++) {
      while (bucket[i].length) {
        array.push(bucket[i].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
