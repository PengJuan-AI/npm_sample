import A, {substract, divide} from "./src/function.js"
import Car from "./src/Car.js"
import sportCar from "./src/sportCar.js"
import isPrime from "prime-number-check";
import { generate, count } from "random-words";


console.log("Hello World");
console.log(A(10, 3))
console.log(substract(10, 3))
console.log(divide(10, 2))

// add a SportCar inheriting car
let sport = new sportCar("Mustagang")
console.log(sport)

console.log(isPrime(30))

// random words
console.log(generate())
console.log(generate({exactly:2}))