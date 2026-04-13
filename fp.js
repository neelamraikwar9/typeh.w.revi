// Map
1//.
const words = ["apple", "banana", "kiwi", "orange", "grape"];

const lengthOfString = words.map((w) => w.length); 
console.log(lengthOfString, "legth"); 

// 2. 
const boks  = [

  { title: "The Catcher in the Rye", author: "J.D. Salinger" },

  { title: "To Kill a Mockingbird", author: "Harper Lee" },

  { title: "1984", author: "George Orwell" },

];

const text = boks.map((b) => b.title); 
console.log(text, "text"); 

//Filter; 

const nums = [12, 5, 20, 8, 15, 30];
let moreTen = nums.filter((n) => n > 10); 
console.log(moreTen, "moreTen");

const students = [
  { name: "Alice", grade: 80 },

  { name: "Bob", grade: 65 },

  { name: "Charlie", grade: 90 },
];

const lowest = students.filter((s) => s.grade < 70); 
console.log(lowest, "lowest");

//Reduce; 

const wors = ["apple", "banana", "kiwi", "orange", "grape"];

const longestWord = wors.reduce((acc, curr) =>  { return curr.length > acc.length ? curr : acc }, ""); 
console.log(longestWord, "long"); 

2.//
const wordsLetter = [
  "apple",
  "banana",
  "kiwi",
  "orange",
  "grape",
  "apple",
  "apple",
];
const freq = wordsLetter.reduce((acc, curr) => {
 acc[curr] = (acc[curr] || 0) + 1; 
 return acc; 
}, {})
 console.log(freq, "freq"); 
 // Output: { a: 1, b: 1, k: 1, o: 1, g: 1 }
