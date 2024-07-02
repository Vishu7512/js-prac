// question-1
document.querySelector('#calculateButton1').addEventListener('click', function () {
    const number = document.querySelector('#ques-1').value;

    function checkOddEven(n) {
        if (n % 2 == 0) {
            console.log("number is even.")
        } else {
            console.log("number is odd");
        }
    }
    checkOddEven(number);
});


// question-2
document.querySelector('#calculateButton2').addEventListener('click', function () {
    const number = document.querySelector('#ques-2').value;

    function year(yearNumber) {
        if (yearNumber % 4 == 0) {
            console.log("yes this is leap year");
        } else {
            console.log("No! this is not a leap year");
        }

    }
    year(number)
});


//question-3
document.querySelector('#calculateButton3').addEventListener('click', function () {
    // const number = document.querySelector('.ques-3').value;

    function largestNumber(x, y, z) {
        if (x > y && x > z) {
            console.log(x + ": is the largest number");

        } else if (y > z && y > x) {
            console.log(y + ": is the largest number");
        } else {
            console.log(z + ": is the largest number");
        }

    }
    largestNumber(3, 8, 3)
});



//question-4
document.querySelector('#calculateButton4').addEventListener('click', function () {
    // const number = document.querySelector('.ques-3').value;

    function checkChar(character) {
        if (character == 'a' || character == 'A' || character == 'e' || character == 'E' ||
            character == 'i' || character == 'I' || character == 'o' || character == 'O' ||
            character == 'u' || character == 'U') {
            console.log("the character is vowel");
        } else {
            console.log("the character is consonant");
        }
    }

    checkChar('a')
});



//question-5
document.querySelector('#calculateButton5').addEventListener('click', function () {
    // const number = document.querySelector('.ques-3').value;

    function grade(score) {
        if (score >= 85 && score <= 100) {
            console.log("you will get Grade A");
        } else if (score >= 75 && score <= 84) {
            console.log("you will get Grade B");
        } else if (score >= 65 && score <= 74) {
            console.log("you will get Grade C");
        } else if (score >= 55 && score <= 64) {
            console.log("you will get Grade D");
        } else {
            console.log("you will get Grade F");
        }
    }

    grade(78)
});


//question-6
document.querySelector('#calculateButton6').addEventListener('click', function () {
    const number = document.querySelector('#numberInput').value;

    function multiple(number) {
        for (let i = 1; i <= 10; i++) {
            var X = number * i;
            console.log(X);
        }
    }
    multiple(number)
});


//question-7
document.querySelector('#calculateButton7').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function numberOfVowel(str) {
        var x = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'A' || str.charAt(i) == 'e' || str.charAt(i) == 'E' ||
                str.charAt(i) == 'i' || str.charAt(i) == 'I' || str.charAt(i) == 'o' || str.charAt(i) == 'O' ||
                str.charAt(i) == 'u' || str.charAt(i) == 'U') {
                x++;
            }

        }
        console.log(x + " no. of vowel present in this String.")
    }
    numberOfVowel('vishal')
});



//question-8
document.querySelector('#calculateButton8').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function factorial(n) {
        var res = 1, i;
        for (i = 2; i <= n; i++) {
            res *= i;
        } console.log(res);
    }

    factorial(5)
});



//question-9
document.querySelector('#calculateButton9').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        console.log(sum);
    }
    const array = [1, 2, 3, 4, 5];
    const sum = sumArray(array);

});


//question-10
document.querySelector('#calculateButton10').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

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


    fibbo(7)

});



//question-11
document.querySelector('#calculateButton11').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function printNumbers() {
        let number = 1;

        while (number <= 100) {
            console.log(number);
            number++;
        }
    }

    printNumbers();
});


//question-12
document.querySelector('#calculateButton12').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function reverse(n) {
        let original = n; // Store the original number
        let reversed = 0, remainder;

        while (n != 0) {
            remainder = n % 10;
            reversed = reversed * 10 + remainder;
            n = Math.floor(n / 10); // Update n by dividing it by 10
        }

        console.log(`Reversed ${original} is ${reversed}`);
    }

    reverse(123);

});



//question-13
document.querySelector('#calculateButton13').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function count(num) {
        // Convert number to string to count its digits
        var numStr = num.toString();
        var numberCount = numStr.length;
        console.log(numberCount);
    }

    count(4637855);

});



//question-14
document.querySelector('#calculateButton14').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function printUntilSpace(str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                break;
            }
            console.log(str[i]);
        }
    }

    const inputString = "Hello World!";
    printUntilSpace(inputString);


});



//question-15
document.querySelector('#calculateButton15').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function sumOfDigit(num) {
        var sum = 0;
        while (num > 0) {

            sum += num % 10
            num = Math.floor(num / 10);
        }
        console.log(sum);
    }
    sumOfDigit(563252)

});



//question-16
document.querySelector('#calculateButton16').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function Digit() {
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 10);
    }
    Digit()

});




//question-17
document.querySelector('#calculateButton17').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function printArrayElements(arr) {
        let index = 0;
        do {
            console.log(arr[index]);
            index++;
        } while (index < arr.length);
    }

    // Example usage:
    const array = [1, 2, 3, 4, 5];
    printArrayElements(array);


});





//question-18
document.querySelector('#calculateButton18').addEventListener('click', function () {
    // const number = document.querySelector('#numberInput').value;

    function promptForPositiveNumber() {
        let number;

        do {
            number = parseFloat(prompt("Please enter a positive number:"));
        } while (isNaN(number) || number <= 0);

        console.log(`You entered a positive number: ${number}`);
    }

    promptForPositiveNumber();


});

