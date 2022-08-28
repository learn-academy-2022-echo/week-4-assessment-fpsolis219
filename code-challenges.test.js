// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Pseudo: create a test using a new jest matcher called expect.arrayContaining(array)
// expect.arrayContaining(array) - is one of many jest matchers thats available to use and this allows us to create a variable for the expected output that is expected to return when running the arguments within a function.
// to my understanding this matcher provides a cleaner code for our expect method rather than having the entire expecter return.
// i used the same naming convention to name my function as well.

describe("arrayContaining", () => {
    const expected1 = ["yellow", "blue", "pink", "green"]
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        expect(arrayContaining(colors1)).toEqual(expect.arrayContaining(expected1))
        expect(arrayContaining(colors2)).toEqual(expect.arrayContaining(expected2))
    })
})


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// pseudo: failure defining the function is a good failure

// ReferenceError: arrayContaining is not defined

// 26 |     const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// 27 |     it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
// > 28 |         expect(arrayContaining(colors1)).toEqual(expect.arrayContaining(expected1))
//    |         ^
// 29 |         expect(arrayContaining(colors2)).toEqual(expect.arrayContaining(expected2))
// 30 |     })
// 31 | })

// b) Create the function that makes the test pass.
// pseudo: Create a function that will let you remove the first value of the array and randomize the order of the values
// i created the function named arrayContaining which is according to the function name provided in my describe.
// following the function name i declared a paarameter named array to pass the arguments with the given variables.
// within the funtion i declared a new variable named arr and i assigned it to the parameter so the argument can passed in.
// with the new variable named arr, i used the mutator .shift() to remove the first array of the value
//with the updated arr i used the built in method .sort to sort the values of the array
//inside the .sort() we followed the Math.random function to create a random arrangement of our values

const arrayContaining = (array) => {
   let arr = array
   arr.shift()
   arr.sort(() => Math.random() - .5)
   return arr

}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.
// a) Create a test with expect statements for each of the variables provided.

// pseudo: create a test using that will pass your function to pass with the variables provided.
// Since the the total output is a single interger i will not be using the the new jest matcher arrayContaining(array)
//i created the describe() method naming my function as the totalVotes
//following the describe() i created my It () method that will explain the intent of my test in plain words.
//within the It() method i created the two expect methods for the two variables that will be testing to receive the expeted the output.
// after completion run the test.
describe("totalvotes", () => { 
    it("Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        expect(totalVotes(votes1.upVotes, votes1.downVotes)).toEqual(11)
        expect(totalVotes(votes2.upVotes, votes2.downVotes)).toEqual(-31)
    })
})

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31



// Pseudo: after running yarn jest expect the failure fail in the expect and responds with the function is not definced.

// ReferenceError: totalVotes is not defined

// 79 | describe("totalvotes", () => { 
// 80 |     it("Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
// > 81 |         expect(totalVotes(votes1.upVotes , votes1.downVotes)).toEqual(11)
//    |         ^

// b) Create the function that makes the test pass.

// PSEUDO: create a function that lets you pass the value of an object to return the total number of votes for the given variables
// create a function named : totalVotes
// following the function name create to paramter names to pass two values of the key value pairs of the object: (upvotes, downvotes)
// within the function create your method that combine both arguments to give you the total number of votes.
// create to variables that will be assaigned the two parameters that represent the argument values: let up = upvotes & let down = downvotes.
// use the return to subtract the two new variables to get the total number of votes.

const totalVotes = (goodvotes, badvotes) => {
    let up = goodvotes
    let down =  badvotes
    return up - down
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//PSEUDO: 
//create the describe method with the function named "combined"
// create a variable called: const expected and assign it the expected output for the test.
//within our It() explain our intent of the given variables and what is expected to output in plain words.
//create two expect methods for the given variables.




describe("combined", () => {

    it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
        expect(combined(dataArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        expect(combined(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})


// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//PSEUDO: run the test axpect a good failure if the test fails for the undefined function.
// create the function to pass the test.

// ReferenceError: combined is not defined

// 131 |
// 132 |     it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
// > 133 |         expect(combined(dataArray1)).toEqual(expect.arrayContaining(expected))
//     |         ^


// b) Create the function that makes the test pass.

// PSEUDO: create a a function that lets you pass in two arrays and combines them using the spread operator.
//addition to that the combined array must not contain dublicate string values.
//create a function named combined.
//within the function we will be using the spread operator to combine the arrays together.
//spread operator is another way of combining two arrays together like concat()
//  to ensure that there are also no duplicates in the array we also use the new set method that will remove any dublicate value. 

const combined = () => {
    let array = [...dataArray1, ...dataArray2]
    return [...new Set(array)]
 }
 