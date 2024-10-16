// 5 task //
console.log('my name is lada and im from kostanay')

// 6 task //
let dogName = "Akuma";
let age = 3;
let small = true; 

if (small) {
    console.log(`I have a dog named ${dogName}. He has been living with us for ${age} years. He is small and very cute.`);
} else {
    console.log("Error")
}

// 7 task //
function calculate() {
let num1 = parseFloat(prompt("first num:"));
let num2 = parseFloat(prompt("second num:"));
let oper = prompt("enter operation:");
let result;

if (oper === "+") {
    result = num1 + num2;
} else if (oper === "-") {
    result = num1 - num2;
} else if (oper === "*") {
    result = num1 * num2;
} else if (oper === "/") {
    result = num1 / num2 ;
}
document.getElementById("result").textContent = "result: " + result;
}

// 8 task //
function date1(){
    const t = new Date();
    document.getElementById('date').innerHTML = t;
}
// 9 task //
function checkLeapYear() {
    let year = parseInt(prompt("enter a year:"));
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById("result2").innerHTML = isLeap ? year + " is a leap year." : year + " is not a leap year.";
}

// 10 task //

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result3').innerText = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }
    let result = num1 / num2;
    document.getElementById('result3').innerText = result;
}

// 11 task //
function convertTemp() {
    let temp = parseFloat(document.getElementById('temp').value);
    let scale = document.getElementById('scale').value;
    let result;

    if (scale === "CtoF") {
        result = (temp * 9/5) + 32;
        document.getElementById('result4').innerHTML = temp + "°C is " + result + "°F";
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById('result4').innerHTML = temp + "°F is " + result + "°C";
    }
}

// 12 task //
function checkEvenOdd() {
    let num = parseInt(document.getElementById('num').value);
    let result = (num % 2 === 0) ? num + " is even" : num + " is odd";
    document.getElementById('result5').innerText = result;
}

// 13 task //
function largLeast() {
    let num1 = parseInt(document.getElementById('numm1').value);
    let num2 = parseInt(document.getElementById('numm2').value);
    let num3 = parseInt(document.getElementById('numm3').value);
    let larg = Math.max(num1, num2, num3);
    let least = Math.min(num1, num2, num3);
    document.getElementById('result6').innerHTML = `largest: ${larg}, smallest: ${least}`;
}

// 14 task //
function heron() {
    let s1 = parseInt(document.getElementById('side1').value);
    let s2 = parseInt(document.getElementById('side2').value);
    let s3 = parseInt(document.getElementById('side3').value);

    let s = (s1+s2+s3)/2;
    let area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    document.getElementById('result7').innerHTML = `Area = ${area}`;
}

// 15 task //
function fact(){
    let numf = parseInt(document.getElementById('numf').value);
    let fact = 1;
    for (let i = 1; i <= numf; i++) {
        fact *= i;
    }
    document.getElementById('result8').innerHTML = `fact = ${fact}`;
}
// 16 task //
function vow() {
    let str = document.getElementById('str1').value.toLowerCase();
    let vowels = 'aeiou';
    let vowC = 0, cCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowC++;
        } else if (char >= 'a' && char <= 'z') {
            cCount++;
        }
    }

    document.getElementById('result9').innerText = `vowels: ${vowC}, consonants: ${cCount}`;
}

// 17 task //
function cTime() {
    let seconds = parseInt(document.getElementById('seconds').value);
    let hours = Math.floor(seconds / 3600);
    let minutes = (seconds % 3600) / 60;

    document.getElementById('result10').innerText = `${seconds} seconds = ${hours} hours and ${minutes.toFixed(2)} minutes`;
}
// 18 task //
function freq() {
    let arr = [1, 3, 3, 5, 1, 3, 7, 9];
    let frequency = {};
    let max = 0;
    let mostFrequent;

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > max) {
            max = frequency[num];
            mostFrequent = num;
        }
    }

    document.getElementById('result11').innerText = `most frequent number is: ${mostFrequent}`;
}
// 19 task //
function fibb() {
    let n = parseInt(document.getElementById('n').value);
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById('result12').innerText = `Fibonacci Sequence: ${fib.join(', ')}`;
}
// 20 task //
function newY() {
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let newYear = new Date(nextYear, 0, 1); 

    let diffInTime = newYear - today;
    let daysLeft = Math.floor(diffInTime / (1000 * 60 * 60 * 24)); 

    document.getElementById('result13').innerText = `there are ${daysLeft} days left until new year.`;
}