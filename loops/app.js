document.querySelector('#calculateButton1').addEventListener('click' , function(){
const numb = document.querySelector('#ques-1').value;
function fibbo(n) {
    var a = 0, b = 1, c, i;
    if (n == 0)
        return a;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    console.log(b);
}

fibbo(numb)
})


// Ques-2
document.querySelector("#calculateButton2").addEventListener('click', function() {
    const numb1 = parseInt(document.querySelector('#ques-2').value, 10);
    function fact(n) {
        let res = 1;  
        for (let i = 1; i <= n; i++) {  
            res *= i;  
        }
        console.log(res);
    }
    fact(numb1);
});

// Ques-3
document.getElementById("calculateButton3").addEventListener('click', function() {
    const numb2 = parseInt(document.getElementById('ques-2').value , 100);

    function prime(num) {
        if (num <= 1) {
            console.log(`${num} is not a prime number`);
            return;
        }
        let flag = 0;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is not a prime number`);
        }
    }

    prime(numb2);
});


// ques 4
document.getElementById("calculateButton4").addEventListener('click', function() {
    const input = document.getElementById('ques-4').value;
    const array = input.split(',').map(Number);

    // Display the array or use it for further processing
    console.log(array);
});

//ques-5
document.getElementById("calculateButton5").addEventListener('click', function() {
function largestElement(arr) {
    return Math.max(...arr);
}

const num1 = [10, 15, 28, 20, 13];
const result = largestElement(num1);

console.log("The largest element in the array is:" + result); 
});

//ques-6
document.getElementById("calculateButton6").addEventListener('click', function() {
    function fizzBuzz() {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
    
    fizzBuzz();
});

//ques-7
document.getElementById("calculateButton7").addEventListener('click', function() {
    function removeDuplicates(arr) {
        return [...new Set(arr)];      // The Set object lets you store unique values of any type.
                                         // Creating a new Set from an array automatically removes duplicate elements.
                                        // The spread operator (...) is then used to convert the Set back into an array.
    }                                 
    const arr = [1, 2, 3, 4, 5, 3, 2, 1];
    const uniqueArray = removeDuplicates(arr);
    console.log("Original array:", arr);
    console.log("Array with duplicates removed:", uniqueArray);
    
});







// function convertToBinary(num) {
//     if (num < 0) {
//         // Handle negative numbers by using the two's complement binary representation
//         return (num >>> 0).toString(2);
//     }
//     return num.toString(2);
// }

// // Example usage:
// const number = 10;
// const binaryRepresentation = convertToBinary(number);
// console.log(`Binary representation of ${number} is ${binaryRepresentation}`);
