// 1. Return the length of the longest GitHub streak (i.e the longest run of consecutive "commit" days).
// output: 3
const days = ["commit", "commit", "no-activity", "commit", "commit", "commit"];

function longestStreak(days) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] === "commit") {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
      //Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(longestStreak(days), "count");

//Variation Question:

const days2 = [
  "commit",
  "commit",
  "commit",
  "no-activity",
  "commit",
  "commit",
  "commit",
  "commit",
  "no-activity",
  "commit",
];

function longestStreak(days2) {
  let count = 0;
  let maxCount = 0;
  let lengthOfStreak = 0;
  for (let i = 0; i < days2.length; i++) {
    if (days2[i] === "commit") {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
      //Math.max(count, maxCount);
    } else {
      if (count >= 3) {
        lengthOfStreak++;
      }
      count = 0;
    }
  }
  return { maxCount, lengthOfStreak };
}

console.log(longestStreak(days2), "count");

//again doing above two Qs.

const code = [
  "commit",
  "commit",
  "commit",
  "no-activity",
  "commit",
  "commit",
  "commit",
  "commit",
  "commit",
];

function longestStreak(code) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i <= code.length; i++) {
    if (code[i] === "commit") {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}
console.log(longestStreak(code), "out");

//7 Apr, 2026 ---  Again starting to do Problem Solving everyday for sure.

// from 9 for super;
const ddd = ["commit", "commit", "no-activity", "commit", "commit", "commit"];

function longesttStreak(ddd) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < ddd.length; i++) {
    if (ddd[i] === "commit") {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(longesttStreak(ddd), "hhjhjhhjh");

const ddd2 = ["commit", "commit", "no-activity", "commit", "commit", "commit"];

function longesttStreak(ddd2) {
  let count = 0;
  let maxCount = 0;
  let lengthtreak = 0; 
  for (let i = 0; i < ddd2.length; i++) {
    if (ddd2[i] === "commit") {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      if(count >= 3){
        lengthtreak++; 
      }
      count = 0;
    }
  }
  return { maxCount, lengthtreak };
}

console.log(longesttStreak(ddd2), "hhjhjhhjh");

// 10 Apr, 2026

const ds = [
  "commit",
  "commit",
  "no-activity",
  "commit",
  "commit",
  "commit",
  "no-activity",
  "no-activity",
  "commit",
  "commit",
  "commit",
  "commit",
  "commit",
];

const getGestStng = (ds) => {
  let count = 0; 
  let maxCount = 0; 
  for(let i = 0; i < ds.length; i++){
    if(ds[i] === "commit"){
      count ++; 

      if(count > maxCount){
        maxCount = count; 
      }
    } else{
      count = 0; 
    }
  }
  return maxCount; 
}

console.log(getGestStng(ds), "line 180");

// 1. Find the **longest commit streak** (maximum consecutive `"commit"` days).
// 2. Count how many streaks had length **≥ 3** (3 days or longer).

// 2. Count how many streaks had length **≥ 5** (5 days or longer).


const record = [
  "Read",    //1   1
  "notRead",// 0   1
  "Read", // 1     1
  "Read", //2      2
  "Read", //3       3
  "Read", //4     4
  "Read", //5     5
  "Read", //6     6
  "notRead", //0  6
  "Read", //1     6
  "Read",//2      6
  "Read", //3     6
  "Read",//4
  "Read", //5
  "notRead", //0
  "Read", //1
  "Read", //2
];

const recordFun = (record) => {
  let count = 0; 
  let maxCount = 0; 
  let length = 0; 
  for(let i = 0; i < record.length; i++){
    if(record[i] === "Read"){
      count ++; 
      if(count > maxCount){
        maxCount = count; 
      }
    } else {
      if(count >= 5){
        length ++; 
      }
      count = 0; 
    }
  } return {maxCount, length}; 
}
console.log(recordFun(record), "record");

