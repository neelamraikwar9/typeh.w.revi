import "./styles.css";

export default function App() {

  //TS1.1_HW

  // Declare a variable named myAge and assign it a value of 25. What data type should you use for this variable?
  let myAge: number = 25;

  // Create a variable called country and assign it a string value, such as your country name. What data type should this variable have?
  let country: string = "India";

  // Declare a boolean variable named isEmployed and set it to true or false. What data type is appropriate for this variable?
  let isEmployed: boolean = true;

  // Create an array named oddNumbers containing a list of odd numbers like [1, 3, 5, 7, 9]. Assign appropriate array type to it.
  let oddNumbers: number[] = [1, 3, 5, 7, 8];

  // Declare an array called colors containing a list of strings representing different colors, such as ['red', 'blue', 'green']. Assign appropriate array type to it.
  let colors: string[] = ["Red", "Black", "Blue", "Pink", "Green"];

  // Define a variable called myData and assign it a value of null. What type should you assign to this variable?
  let myData: null = null;

  // Create an object named book with properties title (string) and pages (number). Assign appropriate types to it.
  const book: { title: string; pages: number } = {
    title: "Eat that frog",
    pages: 200,
  };

  // Create an object employee with properties name (string), id (number), and isActive (boolean). Assign appropriate types to it.
  let employee: { propertiesName: string; id: number; isActive: boolean } = {
    propertiesName: "RK Property",
    id: 11220,
    isActive: true,
  };

  // 9. Define an object named profile with following properties and assign appropriate types to it:

  // username (string)
  // email (string)
  // age (number)
  // skills (array of strings)
  // address(object) with properties:
  // city (string)
  // zipCode (number)
  // isVerified (boolean)
  // notes (null).

  const profile: {
    username: string;
    email: string;
    age: number;
    skills: string[];
    address: { city: string; zipCode: number };
    isVerified: boolean;
    notes: null;
  } = {
    username: "saph",
    email: "saph@gmail.com",
    age: 21,
    skills: ["Communication", "Adaptability", "Punctual"],
    address: { city: "Delhi", zipCode: 12345 },
    isVerified: true,
    notes: null,
  };


  // 10. Define an object named company with the following properties and assign appropriate types to it:
  // name (string)
  // location(object) with properties:
  // city (string)
  // state (string)
  // zipCode (number)
  // employees(array of objects) with properties:
  // name (string)
  // id (number)
  // isFullTime (boolean)
  // establishedYear (number)
  // isPublic (boolean)
  // additionalInfo (null).

  const company: {name: string, location: {city: string, state: string, zipCode: number}, employees: {name: string, id: number, isFullTime: boolean, establishedYear: number, isPublic: boolean, additionalInfo: null} } = {
    name: "horizon",
    location: {city: 'Ranchi', state: 'Jharkhand', zipCode: 54321},
    employees: {name: "Jeck", id:4567, isFullTime: true, establishedYear: 2020, isPublic: false, additionalInfo: null}
  }



// TS1.2_HW
  // Question Set 1:
  // 1.Define a variable id with the type that allows it to store either a string or a number.
  let id: number | string = 1;
  id = "one";
  id = 1;

  // 2.Declare a variable status that can only be one of the following strings: "active", "inactive", or "pending".

  let status: string = "active";

  // 3. Create a variable input that can either be a boolean or null.
  let input: boolean | null;
  input: true;
  input: null;

  //4. Declare a variable numberOrStringArray as an array that can store either number or string elements.

  let numberOrStringArray: (number | string)[] = [
    "happy",
    "Republic",
    "Day",
    2026,
  ];

  // Question Set 2:

  // 1.Define a type Person which has properties name (string) and age (number).

  type Person = {
    name: string;
    age: number;
  };

  // 2. Define a type Student which extends Person and adds a property studentId (string).

  type Student = Person & {
    studentId: string;
  };

  // 3. Define a type Teacher which extends Person and adds a property subject (string).

  type Teacher = Person & {
    subject: string;
  };

  //4. Define a type WorkingStudent that combines Student and a new type Employee with a property company (string).

  type Employee1 = {
    company: string;
  };

  type WorkingStudent = Student & Employee1;

  //5. Create a variable fullProfile of a type that combines the properties of both Teacher and an Address type with city and zipCode.
  type Address = {
    city: string;
    zipCode: number;
  };

  type fullProfile = Teacher & Address;

  // Question Set 3:

  // 1. Define a type Vehicle which has properties make (string) and year (number).
  type Vehicle = {
    make: string;
    year: number;
  };

  // 2. Define a type Car which extends Vehicle and adds a property seats (number).
  type Car = Vehicle & {
    seats: number;
  };

  //3.Define a type Bike which extends Vehicle and adds a property type (string).
  type Bike = Vehicle & {
    type: string;
  };

  // 4. Define a type ElectricCar that combines Car and a new type Battery with a property capacity (number).
  type Battery = {
    capacity: number;
  };

  type ElectricCar = Car & Battery;

  //5. Create a variable bikeDetails of a type that combines the properties of both Bike and a Registration type with regNumber (string) and ownerName (string).

  type Registration = {
    regNumber: string;
    ownerName: string;
  };

  type bikeDetails = Bike & Registration;




  //TS1.3_HW; 

  // 1. Define a function named sayGoodbye that takes a parameter name (string) and logs a message like "Goodbye, [Name]!".

  function sayGoodbye(name: string): void {
    console.log(`Goodbye, ${name}`);
  }
  sayGoodbye("Jhon");

  // 2. Create a function named multiply that takes two parameters x and y (both numbers), multiplies them, and returns the result.

  function multiply(x: number, y: number): number {
    return x * y;
  }
  console.log(multiply(6, 9));

  // 3. Define a function named isEven that takes a number as a parameter and returns true if the number is even, otherwise false.

  function isEven(number: number): boolean {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isEven(1), "1");
  console.log(isEven(2), "2");

  //4. Create a function named logValue that takes a parameter value which can be a string, number, or boolean, and logs it to the console.

  function logValue(value: string | number | boolean): void {
    console.log(`${value}`, "isConsoling");
  }
  logValue("String");
  logValue(3);
  logValue(true);

  // 5. Define a function describePerson that takes an object with properties name (string) and age (number), and returns a sentence like "Alice is 30 years old.".

  function describePerson(Person: { name: string; age: number }): string {
    return `${Person.name} is ${Person.age} years old.`;
  }

  console.log(describePerson({ name: "River", age: 12 }));
  console.log(describePerson({ name: "Alice", age: 30 }));

  //6. Create a function getUserRole that takes a User object with a discriminated union type:

  // 1. If the role is "admin", return "Admin Access".
  // 2. If the role is "user", return "User Access".
  //3. If the role is "guest", return "Guest Access".

  type User1 = {
    role: "admin";
  };

  type User2 = {
    role: "user";
  };

  type User3 = {
    role: "guest";
  };

  type Users = User1 | User2 | User3;

  function getUserRole(users: Users): string {
    if (users.role === "admin") {
      return "Admin Access";
    } else if (users.role === "user") {
      return "User Access";
    } else {
      return "Guest Access";
    }
  }
  console.log(getUserRole({ role: "admin" }));
  console.log(getUserRole({ role: "user" }));
  console.log(getUserRole({ role: "guest" }));

  //7. Define a function promoteEmployeeToManager that takes an object of type Employee with properties name (string) and department (string), and returns a new object of type Manager which has all Employee properties and an additional level (string).

  type Employee = {
    name: string;
    department: string;
  };

  type Manager = Employee & {
    level: string;
  };

  function promoteEmployeeToManager(employee: Employee): Manager {
    return { ...employee, level: "High" };
  }

  console.log({ name: "Sem", department: "Health & Education" });

  //8. Create a function squareNumbers that takes an array of numbers and returns a new array where each number is squared.

  function squareNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * 2);
  }
  console.log(squareNumbers([5, 6, 7]));




  //TS2.1_HW

  // 1. Define an interface named Book with properties title (string) and author (string). Then, declare a variable myBook that adheres to this interface.

  interface Book {
    title: string;
    author: string;
  }

  const myBook: Book = {
    title: "Eat that frog",
    author: "Brian Tracy",
  };

  // 2. Define a function printBookInfo that takes a parameter of type Book and logs a message like "Title: [Title], Author: [Author]".

  function printBookInfo(book: Book): void {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  }

  //3. Define an interface named User with properties username (string) and email (string). Then, declare a variable currentUser that adheres to this interface.

  interface User {
    username: string;
    email: string;
  }

  const currentUser: User = {
    username: "Selena",
    email: "selenaGomez@gmail.com",
  };

  //4. Define a function printUser that takes a parameter of type User and logs a message like "Username: [username], Email: [email]".

  function printUser(user: User): void {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
  }

  //5. Create an interface Movie with the following properties:
  // title (string)

  // director (string)

  // releaseYear (number)

  // genres (array of strings)

  interface Movie {
    title: string;
    director: string;
    releaseYear: number;
    genres: string[];
  }

  // 6. Create an interface Laptop with the following properties:

  // brand (string)

  // model (string)

  // price (number)

  // specs (object) with the following properties:

  // ram (string)

  // storage (string)

  // processor (string)

  interface Laptop {
    brand: string;
    model: string;
    price: number;
    specs: {
      ram: string;
      storage: string;
      processor: string;
    };
  }


  //7. Declare an interface ConcatFunction that defines a function signature for a function that takes two parameters of type string and returns a string. Then, define a function named concatStrings using this interface.

  interface ConcatFunction {
    (string1: string, string2: string) : string;
  }

  const concatStrings: ConcatFunction = (string1, string2) => {
    return string1 + string2;
  }

  console.log(concatStrings("I Love", " My India!💖"));


  //8. Declare an interface BooleanFunction that defines a function signature for a function that takes a parameter of type number and returns a boolean. Then, define a function named isPositive using this interface.

  interface BooleanFunction {
    (a : number) : boolean
  }

  const isPositive : BooleanFunction = (a) => {
    if(a >= 0){
    return true;
    } else{
      return false;
    }
  }
console.log(isPositive(-2)); 
console.log(isPositive(0)); 


//9. Declare an interface SubtractFunction that defines a function signature for a function that takes two number parameters and returns a number. Then, define a function named subtract using this interface.

interface SubtractFunction {
  (a: number, b: number) : number
}

const subtract : SubtractFunction = (a, b) => {
  return (a - b); 
}

console.log(subtract(100, 50)); 



//10. Declare an interface StringCheckFunction that defines a function signature for a function that takes one string parameter and returns a boolean. Then, define a function named isLongString that returns true if the string has more than 10 characters.

interface StringCheckFunction {
  (a : string) : boolean
}

const isLongString : StringCheckFunction = (a) => {
  if(a.length > 10){
    return true; 
  } else{
    return false; 
  }
}
console.log(isLongString("NeelamRaikwar"), "isMoreThan10"); 
console.log(isLongString("Neelam"), "isMoreThan10"); 


//TS2.2_HW

//1. Create a generic function named echo that takes a value of any type and returns the same value.

  function echo<T>(value: T): T {
    return value;
  }

  console.log(echo("any value"));
  console.log(echo(1));
  console.log(echo(true));

  //The generic <T> makes it type-safe, inferring the type automatically.

  //2. Define a generic function getLength that takes an array of any type and returns the number of elements.

  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3, 4, 5]), "1st");
  console.log(getLength([5, 254, 34, 52]), "2nd");

  //3. Create a generic function returnFirst that takes an array of type T[] and returns the first item.

  function returnFirst<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(returnFirst([2, 4, 6, 7, 8]), "firstReturn");

  //4. Define a generic function wrap that takes a value of type T and returns an array containing that value.

  function wrap<T>(value: T): T[] {
    return [value];
  }

  console.log(wrap(2));
  console.log(wrap("smth"));

  //5. Create a function logAndReturn that consoles a value of any type and then returns it.

  function logAndReturn<T>(value: T): T {
    console.log(value, "valueee");
    return value;
  }
  logAndReturn(true);
  logAndReturn(1);

  //6. Define a generic function isEmpty that takes an array of any type and returns true if the array is empty, otherwise false.

  function isEmpty<T>(arr: T[]): boolean {
    if (arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isEmpty([]), "checking array");
  console.log(isEmpty([1, 3, 5, 7]), "checking array");

  //7. Define a generic function named containsItem that takes two parameters: an array items of type T[] and an item of type T. The function should return true if the item exists in the array, otherwise false.

  function containsItem<T>(arr: T[], item: T): boolean {
    return arr.includes(item);
  }

  console.log(containsItem([2, 4, 5, 6], 4), "item exist");
  console.log(containsItem([7, 8, 9, 6], 10), "item exist");

  //8. Create a generic function named countOccurrences that takes an array items of type T[] and a value item of type T. The function should return the number of times the item appears in the array.

  function countOccurrences<T>(arr: T[], item: T): number {
    return arr.filter((n) => n === item).length;
  }

  console.log(countOccurrences([3, 4, 5, 4, 4], 4));


  

  // return (
  //   // <>
  //   // <div className="App">
  //   //   <h1>Hello CodeSandbox</h1>
  //   //   <h2>Start editing to see some magic happen!</h2>
  //   // </div>
  //   // </>
    
  // )
}

