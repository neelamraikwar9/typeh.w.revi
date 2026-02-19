// 1. Return the length of the longest GitHub streak (i.e the longest run of consecutive "commit" days).
// output: 3

const days = ["commit", "commit", "no-activity", "commit", "commit", "commit"];

const longestStreak = (days) => {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] === "commit") {
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

console.log(longestStreak(days), "maxCount");

// 2. **Tasks:**

// 1. Find the **longest commit streak** (maximum consecutive `"commit"` days).
// 2. Count how many streaks had length **≥ 3** (3 days or longer).
// Expected Output:
// Longest streak = 4
// Streaks of length ≥ 3 = 2

const dayss = [
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

function longComitStrak(dayss) {
  let count = 0;
  let maxCount = 0;
  let lengthOfStreak = 0;

  for (let i = 0; i < dayss.length; i++) {
    if (dayss[i] === "commit") {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      if (count >= 3) {
        lengthOfStreak++;
      }
      count = 0;
    }
  }
  return { maxCount, lengthOfStreak };
}

console.log(longComitStrak(dayss), "longComitStreak");

//  LeetCode Questions;

//Q.485   Given a binary array nums, return the maximum number of consecutive 1's in the array. Output- 3
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

s = "leetcode";
console.log(s.length, "length");

nums = [1, 1, 0, 1, 1, 1];

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == "1") {
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
console.log(findMaxConsecutiveOnes(nums), "maxCount");

// 674. Longest Continuous Increasing Subsequence
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing. output = 3

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.

numss = [1, 3, 5, 4, 7];

var findLengthOfLCIS = function (numss) {
  let count = 1;
  let maxCount = 1;
  // let length = 0;

  for (let i = 0; i < numss.length; i++) {
    if (numss[i] < numss[i + 1]) {
      count++;
      console.log(count, "checing count");
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 1;
    }
  }
  return maxCount;
};

console.log(findLengthOfLCIS(numss));

// 1446. Consecutive Characters
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

s = "leetcode";

var maxPower = function (s) {
  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;

      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 1;
    }
  }
  return maxCount;
};

console.log(maxPower(s));

//Problem Solving 2nd;

// First Unique Character in a String.

// steps:-
// 1. frequency of each letter.
// 2. find non repeating charactor.

// Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.

let string = "puppy";

const firstUniqueChar = (string) => {
  const count = {};

  for (let char of string) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count, "count");

  //finding non repeating char;

  for (let i = 0; i < string.length; i++) {
    if (count[string[i]] === 1) {
      return i;
    }
  }
  return -1;
};
firstUniqueChar(string);
console.log(firstUniqueChar("puppy"), "Unique");

// Unique Number of Occurrences
// steps;
// 1. count occurances.
// 2. extract frequences.
// 3. check for uniquness.
// 4. check length frequencies.

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

arr = [1, 2, 2, 1, 1, 3];

const uniqueOccurances = (arr) => {
  count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    console.log(count, "cufjndfn");
  }

  // extracting frequency in an array;

  const freq = Object.values(count);
  console.log(freq, "freq");

  //checking for uniqueness;

  const uniq = new Set(freq);
  console.log(uniq, "uniq");

  //checking if unique freq matches with the frequencies;

  return freq.length === uniq.size;
};
console.log(uniqueOccurances(arr), "2nd");

// Leet Code Questions;

// 1748. Sum of Unique Elements
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

//Return the sum of all the unique elements of nums.

let numbs = [1, 2, 3, 2];

function sumUniqueNums(numbs) {
  let count = {};

  //finding the frequency;
  for (let num of numbs) {
    count[num] = (count[num] || 0) + 1;
    console.log(count, "kdkdf");
  }

  return Object.keys(count).reduce((acc, curr) => {
    console.log(count[curr] === 1, "chehkdjkdjfkjfdk");
    return count[curr] === 1 ? acc + Number(curr) : acc;
  }, 0);
}

console.log(sumUniqueNums(numbs), "hjkjlkjkkljkjkjkl88888");

// console.log(sumOfUnique(numbs));

// 1189. Maximum Number of Balloons;
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// let text = "nlaebolko"
let text = "loonbalxballpoon";

let balon = "balloon";

function countBaloons(text) {
  let count = {};
  for (let char of text) {
    count[char] = (count[char] || 0) + 1;
    console.log(count, "kjkdkjlkfd");
  }

  let countBaloons = {};
  for (let ch of balon) {
    countBaloons[ch] = (countBaloons[ch] || 0) + 1;
    console.log(countBaloons, "fdkkdf");
  }

  let minBalloons = Infinity;

  // Loop through each required balloon letter
  for (let ch of "balon") {
    let available = count[ch] || 0; // How many of THIS letter in text?
    let needed = countBaloons[ch]; // How many of THIS letter per balloon?

    let possible = Math.floor(available / needed); // How many balloons can THIS letter make?

    // 5/2 = 2.1 => 2

    if (possible < minBalloons) {
      minBalloons = possible; // Keep SMALLEST number (limiting factor)
    }
  }

  return minBalloons;
}
console.log(countBaloons(text), "kjldkjfdkljkkkkk");

// Your Data:
// text
// count (text):      { n: 1, l: 2, a: 1, e: 1, b: 1, o: 2, k: 1 }
// countBaloons:      { b: 1, a: 1, l: 2, o: 2, n: 1 }
// Step-by-Step Execution:
// text
// minBalloons starts = Infinity

// 1️⃣ ch = 'b'
//    available = count['b'] = 1
//    needed    = countBaloons['b'] = 1
//    possible  = Math.floor(1/1) = 1
//    1 < ∞ ? YES → minBalloons = 1

// 2️⃣ ch = 'a'
//    available = count['a'] = 1
//    needed    = countBaloons['a'] = 1
//    possible  = Math.floor(1/1) = 1
//    1 < 1 ? NO → minBalloons stays 1

// 3️⃣ ch = 'l'
//    available = count['l'] = 2      ← You have 2 L's
//    needed    = countBaloons['l'] = 2  ← Need 2 L's per balloon
//    possible  = Math.floor(2/2) = 1
//    1 < 1 ? NO → minBalloons stays 1

// 4️⃣ ch = 'o'
//    available = count['o'] = 2
//    needed    = countBaloons['o'] = 2
//    possible  = Math.floor(2/2) = 1
//    1 < 1 ? NO → stays 1

// 5️⃣ ch = 'n'
//    available = count['n'] = 1
//    needed    = countBaloons['n'] = 1
//    possible  = Math.floor(1/1) = 1
//    1 < 1 ? NO → stays 1

// RETURN: 1 balloon 🎈

// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

let jewels = "aA";
let stones = "aAAbbbb";

const jewelsAlsoStones = (jewels, stones) => {
  const jewelSet = new Set(jewels);
  console.log(jewelSet, "jewelSet");

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }
  return count;
};

console.log(jewelsAlsoStones(jewels, stones), "fjdfkdf");

// 409. Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// s = "abccccdd";
// s = "abbccdddd"
s = "aa";

function lengthOfPalindrome(s) {
  let count = {};
  for (ch of s) {
    count[ch] = (count[ch] | 0) + 1;
    console.log(count, "count nn");
  }

  let palindrome = Object.values(count);
  console.log(palindrome, "parlinkdfjkj");

  let [palindromeLength, hasOdd] = palindrome.reduce(
    (acc, curr) => {
      // ✅ CORRECT: Get even part only
      acc[0] += curr - (curr % 2);

      // ✅ Track odds
      if (curr % 2 === 1) {
        acc[1] = true;
      }

      return acc; // Return SAME array
    },
    [0, false],
  ); // Start [length, hasOdd]

  console.log(palindromeLength, "palindromeLength");

  return hasOdd ? palindromeLength + 1 : palindromeLength;
}

// console.log(lengthOfPalindrome(s));
console.log(lengthOfPalindrome(s), "youiyuyuyuy");

// ❌ Can't use ALL letters (2 odds: a,b)
// ✅ We DISCARD 'b' and use: a:1, c:4, d:2

// Final counts used:
// a:1 (CENTER)
// c:4 (pairs)
// d:2 (pairs)
// b:0 (discarded!)

// Now: 1 odd (a) + all even → VALID!

5; // Visual Flow
// text
// Initial: [0, false]     // [length, hasOdd]

// Step 1 (a:1):
// acc[0] = 0 + (1-1) = 0
// acc[1] = true
// Return: [0, true]

// Step 2 (b:1):
// acc[0] = 0 + (1-1) = 0
// acc[1] = true (already)
// Return: [0, true]

// Step 3 (c:4):
// acc[0] = 0 + (4-0) = 4
// Return: [4, true]

// Step 4 (d:2):
// acc[0] = 4 + (2-0) = 6
// Return: [6, true]  ← Final!
// Destructuring gets both values
// javascript
// let [palindromeLength, hasOdd] = frequencies.reduce(...);
// //          ↑                    ↑
// //       6                  true

var longestPalindrome = function (s) {
  //counting frequencies for each element in the string;
  let count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
    console.log(count);
  }

  let Palindrome = Object.values(count);

  let [PalindromeLength, hasOdd] = Palindrome.reduce(
    (acc, curr) => {
      //get even;

      acc[0] += curr - (curr % 2);

      //track odd;

      if (curr % 2 === 1) {
        acc[1] = true;
      }

      return acc;
    },
    [0, false],
  );

  return hasOdd ? PalindromeLength + 1 : PalindromeLength;
};

console.log(longestPalindrome(s));

//5 Feb 2026

// 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

((ransomNote = "aa"), (magazine = "aab"));
// ransomNote = "aa", magazine = "ab"

var canConstruct = function (ransomNote, magazine) {
  let count = {};

  for (let ch of magazine) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let chh of ransomNote) {
    if (!count[chh] || count[chh] === 0) {
      return false;
    }
    count[chh]--;
  }

  return true;
};
console.log(canConstruct(ransomNote, magazine), "ransome");

//17 Feb, 26

//242. Valid Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// let sv = "anagram";
// let tv = "nagaram";

// let sv = "rat";
// let tv = "car";

let sv = "ab";
let tv = "a";

let isAnagram = function (sv, tv) {
  if (sv.length !== tv.length) {
    return false;
  }

  let count = {};

  for (let ch of sv) {
    count[ch] = (count[ch] || 0) + 1;
    console.log(count, "count");
  }

  for (let chh of tv) {
    if (!count[chh] || count[chh] === 0) {
      return false;
    }
    count[chh]--;
  }

  return true;
};

console.log(isAnagram(sv, tv), "aragrammm?");

//18 Feb, 26
// 387. First Unique Character in a String; 
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

let su =  "leetcode"; 
// let su = "loveleetcode"

const uniqueChar = (su) => {
 count = {}; 
  for(let ch of su){
    count[ch] = (count[ch] || 0) + 1; 
    console.log(count, "count"); 
  }

  for(let i = 0; i < su.length; i++){
    if(count[su[i]] === 1) 
    return i; 
  }

  return -1

}
console.log((uniqueChar(su)), "uniqueChar"); 

// 19/2/26
//1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

//  Input: arr = [1,2,2,1,1,3]; 
 Input: arr = [1,2]; 
//  Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]; 

 function uniqueNumOcc(arr){
  let count = {}; 
    for(let num of arr){
      count[num] = (count[num] || 0) + 1; 
    }

    const freq = Object.values(count); 

    const uniqueFrq = new Set(freq);
    console.log(uniqueFrq, "uniqueFrq"); 

    return freq.length === uniqueFrq.size; 
 }

 console.log( uniqueNumOcc(arr), "arr unique num");