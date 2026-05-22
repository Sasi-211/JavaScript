console.log("Hello World!");
// document.write(5+5);

// var num1 = 16;
// var num2 = 20;
// // console.log(num1+num2)
// // 1.Greater of Two
// if (num1 > num2){
//     console.log("True")
// }else{
//     console.log(num1 +" is not greater than " +num2)
// }

// // 2.Even or not
// if (num1%2==0){
//     console.log("Even Number")
// }else{
//     console.log("Not an Even Number")
// }

// // Leap Year
// if (num1%4==0){
//     console.log(num1 + " is leap year.")  
// }else if (num1%100==0){
//     console.log(num1 + " is not a Leap year.")
// }else if (num1%400==0){
//     console.log(num1 +" not a leap year")
// }else{
//     console.log("Not a Leap year.")
// }

// Prime number or not.
// var userinput = 13
// count=0;
// for ( var i=1; i<=userinput; i++){
//     if(userinput%i==0){
//         count++;
//     }
// } 
// if(count==2){
//     console.log(userinput+" is prime number");
//     // document.write(userinput+" is prime number")
// }
// else{
//     console.log(userinput+" is not prime number");
// }

// Palindrome number or not.
var input = 121;
let temp = input;
var rev=0;
while(input>0){
    let d=input%10;
    var rev=rev*10+d;
    input=Math.floor(input/10);
}
if(temp==rev){
    console.log(input+" is a palindrome");
}else{
    console.log(input+" is not a palindrome number");
}
