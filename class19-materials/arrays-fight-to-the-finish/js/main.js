//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['band of brothers','stripes','road to perdidtion']

movieTitles.forEach((x,i) => document.querySelector('h2').innerText += ' ' + x) 


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrOfNums = [1,2,3,4,5,6,7,8,9]

// arrOfNums.forEach((x,i) => arrOfNums[i] = x + 3)

//Find the average of all the numbers from question three

let tot = 0
arrOfNums.forEach((x,i) => tot += x)
let avg = tot / arrOfNums.length
alert(tot)
alert(avg)