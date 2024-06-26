/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
Modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) console.log(`${i} = FizzBuzz`)
    else if(i % 3 === 0) console.log(`${i} = Fizz`)
    else if(i % 5 === 0) console.log(`${i} = Buzz`)
    else console.log(`${i}`)
    
  }