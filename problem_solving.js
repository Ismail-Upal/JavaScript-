// 1. Grade making:

// let mark = 4;
// if(mark >= 80 && mark <=100){
//     console.log("Grade is : A+");
// }
// else if(mark >=70 && mark <80){
//     console.log("Grade is : A");
// }
// else if(mark >=60 && mark <70){
//     console.log("Grade is : A-");
// }
// else if(mark >= 50 && mark < 60){
//     console.log("Grade is : B");
// }
// else if(mark >= 40 && mark < 50){
//     console.log("Grade is : C");
// }
// else if(mark >= 0 && mark < 40){
//     console.log("You have failed");
// }
// else{
//     console.log("Invalid Marks!!");
// }

// ----------------------------------------------

// 2. Odd or Even 

// const OddEven = (num)=>{
//     if(num == 0){
//         return 'Zero';
//     }
//     else if(num %2 ==0 ){
//         return 'Even';
//     }
//     else {
//         return 'Odd';
//     }
// }
// let num1 = 5, num2 = 8;

// console.log(num1, " is ", OddEven(num1));
// console.log(num2, " is ", OddEven(num2));

// -------------------------------------------------

// 3. Sorting

// let numbers = [4, 5, 3, 2, 1, 6, 10, 9, 15, 8, 7, 18, 19, 20, 17, 16, 11, 12, 14, 13];

// const sort = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let tmp = array[i];
//                 array[i] = array[j];
//                 array[j] = tmp;
//             }
//         }
//     }
//     return array;
// }

// let ans = sort(numbers);
// console.log(ans);

// -----------------------------------------------------

// 4. Leap Year

// let year1 = 2033, year2 = 2020;
// const leapYear = (year)=>{
//     if((year % 4 == 0 && year % 100 != 0) || (year%400==0)){
//         return 'is a leap year';
//     } 
//     else return 'is not a leap year';
// }

// console.log(year1, leapYear(year1));
// console.log(year2, leapYear(year2));

// ---------------------------------------------------------

// 5. Divisible by 3 and 5

// let numbers = [];
// for(let i=1; i<=50; i++){
//     if(i % 3 ==0 && i % 5 ==0){
//         numbers.push(i);
//     }
// }

// console.log(numbers);

// ---------------------------------------------------------

// 6. Big Name 

// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// const BigName = (array) =>{
//     let ans = "";
//     array.forEach(element => {
//         if(element.length > ans.length){
//             ans = element;
//         }
//     });

//     return ans;
// }

// console.log(BigName(friends));

// ------------------------------------------------------------

// 7. Remove Duplicate

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// let ans = [];
// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] != numbers[i+1]){
//         ans.push(numbers[i]);
//     }
// }

// console.log(ans);

// --------------------------------------------------------------

// 8. Big Number

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// let bignum = 0;

// numbers.forEach(num => {
//     if(num > bignum){
//         bignum = num;
//     }
// });

// console.log(bignum);

// console.log(Math.max(...numbers));

// ------------------------------------------------------------------


// 9. Monthly Savings 

let allPayments = [900, 2700, 3400];
let livingCost = 10000;

const monthlySavings = (allPayments, livingCost)=>{
    if(Array.isArray(livingCost) || !Array.isArray(allPayments)){
        return 'invalid input';
    }

    let tax = 0, totalEarn = 0;
    allPayments.forEach(tk => {
        if(tk >= 3000){
            tax += (tk*20)/100;
        }
        totalEarn += tk;
    });
    let savings = totalEarn - tax - livingCost;
    if(savings < 0) return 'earn more';
    else return savings;
}

console.log(monthlySavings(allPayments, livingCost));

// -------------------------------------------------------------------------