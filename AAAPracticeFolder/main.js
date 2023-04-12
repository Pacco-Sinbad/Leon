// const aurora = {
//   name: 'Aurora',
//   health: 100,
//   strength: 20,
//   xp: 89,

//   describe(){
//     return`${this.name} has ${this.health} hitpoints, a strength of ${this.strength}, and has accumulated ${this.xp} experience`;
//   }
// }

// aurora.health -= 20;
// aurora.strength += 10;
// aurora.xp += 15;

// console.log(aurora.describe());

// const bucket = {
//   name: 'Bucket',
//   species: 'Boxer',
//   weight: 55,

//   describe(){
//     return`${this.name} is a ${this.species} measureing ${this.size} pounds`;
//   },
//   bark(){
//    return `woof`;
//   },
//   cat(){
//     return `${this.name} look, a cat! ${this.name} barks: ${this.bark()}`;
//   }
// };

// console.log(bucket.describe());
// console.log(bucket.cat());

// // 
// // 
// // 
// // 

// const r = Number(prompt('Enter the circle radius:'));

// circle = {
//   radius: r,
//   circumfrence: (2 * r * Math.PI),
//   area: (2 * Math.PI * r^2),

//   describe(){
//     return `the circumfrence of the circle is ${this.circumfrence} and the area of the circle is ${this.area}`
//   }
// }

// console.log(circle.describe())

// account = {
//   name: 'Alex',
//   balance: 0,
  
//   credit(a){
//     a = Number(prompt("Please denote the amount change in the account balance:"));
//     account.balance += a;
//   },

//   describe(){
//     return `Owner: ${this.name}, balance ${this.balance}`
//   }
// }

// console.log(account.describe())

// account.credit()

// account.credit()

// console.log(account.describe())


// 
// 
// 
// 

// function reverseWords(str) {
//   let arr = str.split(' ');

//   for (let i = 0; i <= arr.length-1; i++){
//     let strArr = arr[i].split('')
//     strArr = strArr.reverse()
//     arr[i] = strArr.join('')
//   };


//   str = arr.join(' ')

//   return str
// }

// let word = reverseWords("this is an example")

// console.log(word)

// function disemvowel(str) {
//   let arr = str.split('');
//   let newArr = arr.filter(x => x.toLowerCase() != 'a' && x.toLowerCase() != 'e' && x.toLowerCase() != 'i' && x.toLowerCase() != 'o' && x.toLowerCase() != 'u' ) ;
  
//   str = newArr.join('');
  
//   return str;
// }

// console.log(disemvowel('This website is for losers LOL'))

// function highAndLow(numbers){
//   numbers = numbers.split(" ");
//   numbers = numbers.sort((a, b) => Number(a) > Number(b) ? 1 : -1);
//   let newArr = [numbers[0] , numbers[numbers.length-1]];
//   let newstr = newArr.join(' ');
//   return newstr;
// }


// console.log(highAndLow('1 3 2 6 5 10 4'))


//*********************************************************************
//******************************************************************** */

// //Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


//******* */


// function rowSumOddNumbers(n) {
//     let arr = []
//     let c = 0
//     for( i=0 ; i <= n ; i++){
//        let x = 0
//        let multipleNumbers = []     
//        while(x <= i){ 
//         multipleNumbers.push(1 + 2*c)  
//         x++
//         c++
//        }
//        arr[i]= multipleNumbers
//     }
    
//     return arr[n-1].reduce((total,current) => total + current, 0)
    
// }

// console.log(rowSumOddNumbers(5))

// //the real answer was
// function rowSumOddNumbers(n){
//   return Math.pow(n,3)
// }



//*********************************************************************
//******************************************************************** */


// function positiveSum(arr) {
//     return arr.filter((x) => x > 0).reduce((total, current) => total + current, 0);
// }

// console.log

