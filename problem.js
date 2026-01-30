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