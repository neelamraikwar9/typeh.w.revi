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
      if (count >= 3) {
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
  for (let i = 0; i < ds.length; i++) {
    if (ds[i] === "commit") {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log(getGestStng(ds), "line 180");

// 1. Find the **longest commit streak** (maximum consecutive `"commit"` days).
// 2. Count how many streaks had length **≥ 3** (3 days or longer).

// 2. Count how many streaks had length **≥ 5** (5 days or longer).

const record = [
  "Read", //1   1
  "notRead", // 0   1
  "Read", // 1     1
  "Read", //2      2
  "Read", //3       3
  "Read", //4     4
  "Read", //5     5
  "Read", //6     6
  "notRead", //0  6
  "Read", //1     6
  "Read", //2      6
  "Read", //3     6
  "Read", //4
  "Read", //5
  "notRead", //0
  "Read", //1
  "Read", //2
];

const recordFun = (record) => {
  let count = 0;
  let maxCount = 0;
  let length = 0;
  for (let i = 0; i < record.length; i++) {
    if (record[i] === "Read") {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      if (count >= 5) {
        length++;
      }
      count = 0;
    }
  }
  return { maxCount, length };
};
console.log(recordFun(record), "record");

//485
// let nums = [1, 0, 1, 1, 0, 1];
let nums = [1, 1, 0, 1, 1, 1];

const getconsecutive = (nums) => {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};
console.log(getconsecutive(nums), "nums.");

//674. Longest Continuous Increasing Subsequence

// let numss = [1, 3, 5, 4, 7];
let numss = [2, 2, 2, 2, 2];

const longestContinuousIncSub = (numss) => {
  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < numss.length; i++) {
    if (numss[i] < numss[i + 1]) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};
console.log(longestContinuousIncSub(numss), " continues subsiquent");

//again 674

let n = [1, 3, 5, 4, 7];

function lcis(n) {
  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < n[i + 1]) {
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
console.log(lcis(n), "nummm");

//my own created question;
let count = [1, 2, 3, 4, 5, 6, 5, 8, 7, 9, 3, 6];
const lonconstr = (count) => {
  let c = 1;
  let mc = 1;
  for (let i = 0; i < count.length; i++) {
    if (count[i] < count[i + 1]) {
      c++;
      if (c > mc) {
        mc = c;
      }
    } else {
      c = 0;
    }
  }
  return mc;
};
console.log(lonconstr(count), "counmy");

// First Unique Character in a String.
// let str = "puppy";
let str = "aabb";

function firUniqChar(str) {
  //using for of loop here;

  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);

  // ste 2

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firUniqChar(str), "stng");
// firUniqChar(str);

// 2nd Q

// let arr = [1, 2, 2, 1, 1, 3];
let arr = [1, 2, 2, 1, 1, 3, 3];

function uniOcc(arr) {
  // step1 keep count;
  let intCount = {};
  for (let num of arr) {
    intCount[num] = (intCount[num] || 0) + 1;
  }
  console.log(intCount, "int");

  //step2
  const freq = Object.values(intCount); //it give values of the object;
  console.log(freq, "freq");

  //step 3 extracting unique value;
  const uniqueFreq = new Set(freq); // used to extract unique char.
  console.log(uniqueFreq, "uniFreq");

  return freq.length === uniqueFreq.size; // for finding size of obj we use that obj.size.
}
console.log(uniOcc(arr));

// 17 Apr,2026
// 674
let s = [1, 2, 3, 4, 5, 3, 2, 1];

function cc(s) {
  let c = 1;
  let mc = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] < s[i + 1]) {
      c++;

      if (c > mc) {
        mc = c;
      }
    } else {
      c = 0;
    }
  }
  return mc;
}
console.log(cc(s), "s");

//Frequency coutner patern ;

// let st = "puppy"
let st = "jjiiu"

function fuc(st){
  // for of loop; 
  let co = {}
  for(ch of st){
    co[ch] = (co[ch] || 0) + 1;
  }
   console.log(co, "co"); 

  //  step: 2
  const fre = Object.values(co); 
  console.log(fre, "fre"); 

  for(let i = 0; i < fre.length; i++){
    if(fre[i] === 1){
      return i; 
    }
  
  }
  return -1; 
}
console.log(fuc(st)); 


// 2. 

// let r = [1, 2, 2, 1, 1, 3];
let r = [1, 2]; 


function uno(r) {
  let c = {};
  for (n of r) {
    c[n] = (c[n] || 0) + 1;
  }
  console.log("c,,", c);
  //get values frm obj
  let fre = Object.values(c);
  console.log(fre, "freq");

  let uf = new Set(fre); 
  console.log(uf, "uf"); 

  return fre.length === uf.size
  
}
console.log(uno(r), "mmm");   // will continue quickly frm here.       


function uniqueOccurance(r){
  const intC = {}; 
  // step1
  for(let num of r){
    intC[num] = (intC[num] || 0) + 1; 
  }
  // console.log(intC, "intC"); 

  // step2

  const fr = Object.values(intC); 
  console.log(fr, "fr"); 

  //step3 

  const uf = new Set(fr); 
  console.log(uf, "uf"); 

  //step 4 
  // seeing if length of unique freq and freq match or not
  return fr.length === uf.size
}
console.log(uniqueOccurance(r), "un");


//1446
// //first unique char
// const stg = "leetcode"

// function cc(stg){
//   // let c = {}
//   // for(w of stg){
//   //   c[w] = (c[w] || 0) + 1; 
//   // }
//   // console.log(c, "c"); 

//   for(let i = 0; i < stg.length; i++){
//     let count = 1
//     if(stg[i] === stg[i + 1]){
//       count++
//     } else{
//       count = 0; 
//     }
//     console.log(count, "count"); 
//   }
//   return count; 
  
// }
// console.log(cc(stg), "stg"); 

// let ss = "leetcode"; 
let ss = "abbcccddddeeeeedcba";

// function cc(ss){
//   c = 1; 
//   max = 1; 
//   for(let i = 0; i < ss.length; i++){
//      if(ss[i] === ss[i + 1]){
//       c++; 
//       if(c > max){
//         max = c; 
//       }
//      } else{
//       c; 
//      }
//   }
//   return max; 

// }
// console.log(cc(ss), "ccss"); 


//current one below; 

// var maxPower = function (ss) {
//   let count = 1;
//   let maxCount = 1;
//   for (let i = 0; i < ss.length; i++) {
//     if (ss[i] === ss[i + 1]) {
//       count++;

//       if (count > maxCount) {
//         maxCount = count;
//       }
//     } else {
//       count = 1;
//     }
//   }
//   return maxCount;
// };

// console.log(maxPower(ss, "ssss")); 


// 20 Apr, 2026
// consicutive char

// let l = "leetcode";
let l = "abbcccddddeeeeedcba";



function cc(l){
  let count = 1; 
  let mC = 1; 
  for(let i = 0; i < l.length; i++){
    if(l[i] === l[i + 1]){
      count ++; 
      if(count > mC){
        mC = count; 
      }
    } else{
      count = 1; 
    }
  }
  return mC; 
}
console.log(cc(l), "l"); 

// 22 Apr, 2026
//1748
// let ns = [1, 2, 3, 2];

let ns = [1, 1, 1, 1, 1];

// function addUnqNum(ns){
//   c = {};
//   for (let n of ns) {
//     c[n] = (c[n] || 0) + 1;
//   }
//   console.log(c, "c");

//   let freq = Object.keys(c); 
//   console.log(freq, "freq");

//   return freq.reduce((acc, curr) => {
//     return c[curr] === 1 ? acc + Number(curr) : acc; 
//   }, 0); 
   
// }
// console.log(addUnqNum(ns), "ns");


// practising again; 

function uniqAdd(ns){
  let c = {}; 

  for(let n of ns){
    c[n] = (c[n] || 0) + 1; 
  }
  console.log(c, "c"); 

  let fre = Object.keys(c); 
  console.log(fre, "fre"); 

  return fre.reduce((acc, curr) => {
    return ( c[curr] === 1 ? acc + Number(curr) : acc); 
  }, 0)
}

console.log(uniqAdd(ns), "kjdkjdfj"); 



//1189  Maximum Number of Balloons

/// leet code solu; 
let text = "loonbalxballpoon";
var maxNumberOfBalloons = function (text) {
  // took a variable for balloon.
  let balloon = "balloon";

  let count = {};
  let countBal = {};
  // findin the frequency for given string;
  for (let char of text) {
    count[char] = (count[char] || 0) + 1;
  }

  // finding the freq. of ballon.
  for (let ch of balloon) {
    countBal[ch] = (countBal[ch] || 0) + 1;
  }

  // Infinity starts as a number, gets replaced by real minimum values!
  let minBalloons = Infinity;

  //looping over each required letter of balon.
  for (let chh of "balon") {
    let available = count[chh] || 0; //letters in text which matches this balon.
    // console.log(available, "available"); 
    let needed = countBal[chh];
    // console.log(needed, "needed"); 

    let possible = Math.floor(available / needed); //how many ballons this makes.

    if (possible < minBalloons) {
      minBalloons = possible;
    }
  }

  return minBalloons;
};
console.log(maxNumberOfBalloons(text), "Balloon");
// (maxNumberOfBalloons(text));


let txt = "nlaebolko";
let ext = "balloon";
const maxBalloon = (txt) => {
  let c = {};
  let balC = {};

  for (let t of txt) {
    c[t] = (c[t] || 0) + 1;
  }

  for (let b of ext) {
    balC[b] = (balC[c] || 0) + 1;
  }
  console.log(c, "c");
  console.log(balC, "b");

  let minBal = Infinity;

  for (let bn of "Balloon") {
    let available = c[bn] || 0;
    console.log(available, "availl");

    let needed = balC[bn];
    console.log(needed, "needed");

    let counBall = Math.floor(available / needed);
    console.log(counBall, "counBall");

    if (counBall < minBal) {
      minBal = counBall;
    }
  }
   return minBal;
};
// console.log(maxBalloon(ext));
console.log(maxBalloon(txt), "maxBalloon"); 

// will do this qs again tommorow; 100%

// 24 Apr, 2026

// let tx = "nlaebolko"; 
let tx = "loonbalxballpoon"; 

let rt = "balloon"
function maxBlon(tx){
  //step 1 finding frequency for each corr in the string.
let c = {}; 
let cB = {}; 
 for(let t of tx){
  c[t] = (c[t] || 0) + 1; 
 }
 console.log(c, "c 693")

 for(r of rt){
  cB[r] = (cB[r] || 0) + 1; 
 }
 console.log(cB, "cB 699");

 let minimum = Infinity; 

 //finding the later can make mini. instances.
 for(let b of 'Ballon'){
  let available = c[b] || 0 
  // console.log(available, "706")

  let needed = cB[b]; 

  let ball = Math.floor(available/needed); 

  if(ball < minimum){
    minimum = ball; 
  }

 }
 return minimum;
 
}
console.log(maxBlon(tx),  "720");



