
// 30 speechSynthesis, 25
// Longest Streak
//1. Return the length of the longest GitHub streak (i.e the longest run of consecutive "commit" days).
// Expected Output: 3

const days = ["commit", "commit", "no-activity", "commit", "commit", "commit"]

function longestStreak(days){
    let count = 0; 
    let maxCount = 0; 
    for(let i = 0; i < days.length; i++){
        if(days[i] === "commit"){
            count++; 
            if(count > maxCount){
                maxCount = count; 
            }
            // Math.max(count, maxCount);  // we can do by this method to.
        } else{
            count = 0; 
        }
    }
    return {maxCount}; 
}
console.log(longestStreak(days), "days"); 






// 2. **Tasks:**

// 1. Find the **longest commit streak** (maximum consecutive `"commit"` days).
// 2. Count how many streaks had length **≥ 3** (3 days or longer).
// Expected Output:
// Longest streak = 4
// Streaks of length ≥ 3 = 2


const dayss = [
  "commit","commit","commit","no-activity","commit","commit","commit","commit",
  "no-activity","commit"
]
function longestStreak2(dayss){
    let count = 0; 
    let maxCount = 0; 
    let lengthOfStreak = 0; 


    for(let i = 0; i < dayss.length; i++){
        if(dayss[i] === "commit"){
            count++; 
            if(count > maxCount){
                maxCount = count; 
            }
            // Math.max(count, maxCount);  // we can do by this method to.
        } else{
            if(count >= 3){
                lengthOfStreak++; 
            }
            count = 0; 
        }
    }
    return {maxCount, lengthOfStreak}; 
}
console.log(longestStreak2(dayss)); 



// 8th November, 2025        Highly asked in interviews! 💯
//Frequency Counter Pattern; 

// 1. **First Unique Character in a String.**
    
//     Given a string, find the **first** non-repeating character in it and return its index. If it **does not** exist, return -1.



// Steps to solve; 
// Step 1. Count the frequency of each letter in the String.
// Step 2. Find 1st non-repeating character. 


function firstUniqueChar(str){
    // Count the frequency
    const count = {}; 
    
    for(let char of str){
        count[char] = (count[char] || 0) + 1; 
    } // two type of for we can use for in and for of.  we want exact element that's why using for of. 
    console.log(count); 

    // Find 1st non-repeating character. 
    for(let i = 0; i < str.length; i++){
        if(count[str[i]] === 1){
            return i; 
        }
    }
     return -1;  // -1 is value didn't exist, no unique chracter exist. 
}

console.log(firstUniqueChar("puppy"), "Unique"); 
console.log(firstUniqueChar("aabb"), "Unique"); 





function firstUniqueChar(str){
    // Count the frequency
    const count = {}; 
    
    for(let char of str){
        count[char] = (count[char] || 0) + 1;  // this is a way of either assigning smth to an objct and getting the value of some key an obj.
    } // two type of for we can use for in and for of.  we want exact element that's why using for of. 

    // str = "puppy" 
// {
//     p: 3, 
//     u: 1,
//     y: 1
// }

    const obj = {
        a: 1, 
        b: 2
    }

    // console.log(obj[a], "fdjkf");              // will access the value of a like this and it will give 1.
    console.log(obj.a, "fkfdjfjk"); 

    obj["c"];  // this is assigning new property to your objects.  the same we are doing here assigning some new char to our count object. assigning each charractor from 'puppy'



    // console.log(count); 

    // Find 1st non-repeating character. 
    for(let i = 0; i < str.length; i++){
        if(count[str[i]] === 1){
            return i; 
        }
    }
     return -1;  // -1 is value didn't exist, no unique chracter exist. 
}

// console.log(firstUniqueChar("puppy"), "Unique"); 
// console.log(firstUniqueChar("aabb"), "Unique"); 


// 2. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

//Step 1: Count occurances
//Step 1: Extract all the frequences 
//Step 3: Check for uniqueness
//Step 4: See if length of the frequencies and unique frequences match or not.


//  let arr = [1,2,2,1,1,3]

function uniqueOccurences(arr){
    //step 1 
    const integerCount = {}; 

    for( let num of arr){
        integerCount[num] = (integerCount[num] || 0) + 1; 
    } //each element of the array is num.
      console.log(integerCount, "uniqueOccurences"); 
 
      //step 2;

      const freq = Object.values(integerCount);   // Object.values it gives the all value of obj.
      console.log(freq, "freq"); 


      //step 3; 

      const uniqueFreq = new Set(freq);  // this new Set(freq) method will give only unique values. 
      console.log(uniqueFreq, "uniqueFreq"); 


      //setp 4; 
      return freq.length === uniqueFreq.size;  // we find the length of array using '.length' and we find the length of the object by using uniqreFreq.size; 
}

console.log(uniqueOccurences([1,2,2,1,1,3,3]), "1st");
console.log(uniqueOccurences([1,2,2,1,1,3]), "2nd"); 







