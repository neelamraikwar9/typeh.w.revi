//Array methods Practice Questions; 

// 1. Given an array of numbers, compute and print the total sum.
    
//     ```jsx
    const nums = [5, 10, 15, 20];
//     // expected result: 50
//     ```

const sumOfNums = nums.reduce((acc, curr) => acc + curr, 0); 
console.log(sumOfNums, "sumOfNums"); 

//  2. Given an array of numbers, find the product of all elements.
    
//     ```jsx
    const nums2 = [2, 3, 4];
//     // expected result: 24
//     ```

const product = nums2.reduce((acc, curr) => acc * curr, 1); 
console.log(product, "product");

// 3. Given an array, calculate the average of a numeric array.
    
//     ```jsx
    const scores = [80, 90, 70, 100];
//     // expected result: 85
//     ```

const average = scores.reduce((acc, curr) => {return acc + (curr/scores.length)}, 0); 
console.log(average, "average"); 

//4. Given a two-dimensional array, flatten it by one level.
const nested = [[1, 2], [3, 4], [5]];
// expected result: [1, 2, 3, 4, 5]; 

// 1st way of doing this;
const flatten = (a, b, c) => [...a, ...b, ...c]; 
console.log(flatten([1, 2], [3, 4], [5])); 


// nested array into a single array.
const nestedArray = [[1, 2], [3, 4], [5, 6]]
// We have to flatten this array ass [1, 2, 3, 4, 5 ,6] 

const fa = nestedArray.reduce((acc, curr) => acc.concat(curr), [])
console.log(fa, "fa"); 
console.log(fa, "fa"); 


// 5. Given an array of objects, pull out the names into a new array.
    
    // ```jsx
    // const users = [
    //   { id: 1, name: 'Alice' },
    //   { id: 2, name: 'Bob' },
    //   { id: 3, name: 'Carol' }
    // ];
    //  expected result: ['Alice', 'Bob', 'Carol']
    // ```

    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Carol' }
    ];

    const names = users.map((n) => n.name); 
    console.log(names, "names"); 


    // 6. Given an array of strings, build an object that counts how many times each string appears.
    
    // ```jsx
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    // // expected result: { apple: 3, banana: 2, orange: 1 }
    // ```

    const occurance = fruits.reduce((acc, curr) => {
        acc[curr] = (acc[curr] | 0) + 1
        return acc; 
    }, {})

    console.log(occurance, "occurance"); 


    //occurance of each word; 

    const fruits2 = ["apple", "banana", "kiwi", "apple"];
    const occuranceFruit = fruits2.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1; 
        return acc; 
    }
    , {}) 

    console.log(occuranceFruit, "occuranceFruit"); 
    // our output is in the form of obj that's why taking empty object which is the accumulator. In the object we have to place our key value pairs.  



console.log("****** 7 ******"); 

    // 7. Given an array of objects, group them by type property.
    
    const pets = [
      { name: 'Spot', type: 'dog' },
      { name: 'Mittens', type: 'cat' },
      { name: 'Rover', type: 'dog' },
      { name: 'Whiskers', type: 'cat' }
    ];
    
    // expected result:
    // {
    //   dog: [ { name: 'Spot', type: 'dog' }, { name: 'Rover', type: 'dog' } ],
    //   cat: [ { name: 'Mittens', type: 'cat' }, { name: 'Whiskers', type: 'cat' } ]
    // }
    


    const grp = pets.reduce((acc, curr) => {
        const key = curr.type; 

        // if(!acc[key]) acc[key] = []; 
        acc[key] ||= [];

        acc[key].push(curr); 

        return acc; 
    } , {})

    console.log(grp, "grp"); 
    
   //8. Given an array of objects, build an object keyed by a unique identifier (sku).

const products2 = [
  { sku: 'A123', name: 'Socks', price: 5 },
  { sku: 'B456', name: 'Hat', price: 15 }
];

// expected result:
// {
//   A123: { sku: 'A123', name: 'Socks', price: 5 },
//   B456: { sku: 'B456', name: 'Hat', price: 15 }
// }


const grpSku = products2.reduce((acc, curr) => {
    const key = curr.sku; 
    // acc[key] ||= []; 
    acc[key]?.push(curr); 

    return acc; 

}, {}); 

console.log(grpSku, "grpSku"); 




console.log("****** 9 ******"); 

    // 9. Given the array of votes, calculate how many votes did each candidate receive?
    
    // ```jsx
    const votes = [
      'Alice', 'Bob', 'Alice', 'Carol',
      'Bob', 'Alice', 'Carol', 'Bob'
    ];
    
    // // expected result:
    // // { Alice: 3, Bob: 3, Carol: 2 }
    // ```


    const count = votes.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1; 
        return acc;
    }, {})
    
    console.log(count, "count"); 


    // 12. Given the string `'mississippi'`, how many times does each character appear?
    
    // ```jsx
    // // expected result:
    // // { m: 1, i: 4, s: 4, p: 2 }
    // ```

    const strng = "mississippi"; 
    const occuranceString = strng.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] | 0) + 1; 
        return acc; 
    }, {}); 

    console.log(occuranceString, "occurancesString"); 
    

    // 13. Given an array. Return only the users who are active.
    
    // ```jsx
    const users2 = [
      { name: 'Anjali', active: true },
      { name: 'Raj', active: false },
      { name: 'Meena', active: true }
    ];
    
    // Expected Output
    // ["Anjali", "Meena"]
    // ```

    const activeUser = users2.filter((u) => u.active = u.active === true ? u.name : null); 
    console.log(activeUser, "activeUser"); 

    const active = activeUser.map((u) => u.name); 
    console.log(active, "active"); 



const nested2 = [[1, 2], [3, 4], [5]];
const flatten2 = nested2.reduce((acc, curr) => acc.concat(curr),[]); 
console.log(flatten2, "flatten2"); 


const users3 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
// expected result: ['Alice', 'Bob', 'Carol']

const newArr = users3.map((u) => u.name); 
console.log(newArr, "newArr"); 


const fruits3 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// expected result: { apple: 3, banana: 2, orange: 1 }
const obj = fruits3.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; 
    return acc; 
} , {})
console.log(obj, "obj"); 



const pets2 = [
  { name: 'Spot', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rover', type: 'dog' },
  { name: 'Whiskers', type: 'cat' }
];

const grpProp = pets2.reduce((acc, curr) => {
    let key = curr.type;
    
    acc[key] ||= []; 

    if(!acc[key]) acc[key] = []; 
    
    acc[key].push(curr); 

    return acc; 
} , []); 

console.log(grpProp, "grpProp");



// const grp = pets.reduce((acc, curr) => {
//         const key = curr.type; 

//         // if(!acc[key]) acc[key] = []; 
//         acc[key] ||= [];

//         acc[key].push(curr); 

//         return acc; 
//     } , {})


const products = [
  { sku: 'A123', name: 'Socks', price: 5 },
  { sku: 'B456', name: 'Hat', price: 15 }
];

const objj = products.reduce((acc, curr) => {
    acc[curr.sku] = curr; 
    return acc; 
}, {})
console.log(objj, "objj"); 


const votes2 = [
  'Alice', 'Bob', 'Alice', 'Carol',
  'Bob', 'Alice', 'Carol', 'Bob'
];

const cV = votes2.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; 
    return acc; 
} , {})
console.log(cV, "cV"); 


const pets3 = [
  { name: 'Fido', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rex', type: 'dog' },
  { name: 'Whiskers', type: 'cat' },
  { name: 'Goldie', type: 'fish' }
];

// const petss = pets3.reduce((acc, curr) => {
//     const key = curr.type; 
//     if(!acc[key]) acc[key] = []; 

//     acc[key].push(curr); 
// }, [])
// console.log(petss, "petss"); 

 // if(!acc[key]) acc[key] = []; 
//  acc[key] ||= [];
//         acc[key].push(curr); 


const sales = [
	{ region: 'North', amount: 100 },
	{ region: 'South', amount:  80 },
	{ region: 'North', amount: 120 },
	{ region: 'East',  amount:  75 },
	{ region: 'South', amount:  20 }
]


const eachR = sales.reduce((acc, curr) => {
    const key = curr.region;
    acc[key] = (acc[key] || 0) + curr.amount; 
    return acc; 
} , {})

console.log(eachR, "eachR"); 



const participation = [
  { name: 'Rahul', hours: 6 },
  { name: 'Neha', hours: 4 },
  { name: 'Ankit', hours: 3 },
  { name: 'Rahul', hours: 5 },
  { name: 'Neha', hours: 2 },
  { name: 'Anjali', hours: 9 }
];

const morethan18h = participation.reduce((acc, curr) => {
    const key = curr.name; 
    acc[key] = (acc[key] || 0) + curr.hours; 
    return acc; 
}, {}); 
console.log(morethan18h, "morethan18h"); 


