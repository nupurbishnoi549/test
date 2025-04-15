function threeNumbers(a, b, c) {
    return a + b + c;
}
let add = threeNumbers(10, 20, 30);
console.log(add);

function palindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (string === reverse) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}
palindrome("madam");

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}
checkLeapYear(2004); 

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    console.log("Factorial of", n, "is", result);
}

factorial(5);

function number(array) {
    console.log("The largest number is:", Math.max(...array));
}
number([12, 45, 78, 23, 89, 34]);


