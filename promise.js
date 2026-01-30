// Tree states in promises;

// Pending: Operation has started but yet not finished.
// Fullfilled: operation is successful.
// Rejected: operation is failed and it has an error;

//creating a promises;
let order = new Promise((resolove, reject) => {
  let foodDe = true;

  if (foodDe) {
    resolove("successfull");
  } else {
    reject("sorry");
  }
});

// console.log(order, "order");

//handle a promise;

order.then((mess) => console.log(mess)).catch((error) => console.log(error));

//real world ex;

fetch("https://jsonplaceholder.typicode.com/posts")  // this fech is fun in js that returns a promise when fetching the data from the server;  the above create and handle promise is basically handle by fetch. we don't have to write explicitely like above when using fetch. 

// this async fun. doesn't block the running of code;  
// a promise represents an operation that will complete in future in sometime it doesn't finishes immediately. Promise can either resolve or reject. Resolve is for success. and Reject is for failure. we can handle the output of the promise with the help of .then (method is  for success) and .catch (method is  for failure). Promise help us manage asynchronous code. (asynchronous mean code that takes time to run and doesn't run immediately.)


  .then((res) => {
    //feched data here;
    return res.json();
  })
  .then((data) => {
    //using data here;
    console.log(data);
  })
  .catch((error) => console.log("smth went wrong.", error));


