// let musketeers = ['Athos', 'Porthos', 'Aramis']
// musketeers.pop("Aramis")
// musketeers.push("D'Drtagnan")
// for (i=0; i<=musketeers.length-1; i++){
//     console.log(musketeers[i])
// }

// musketeers.forEach((x,i) => console.log(musketeers[i]))

// for (const musketeer of musketeers) {console.log(musketeer)}

// let values = [3, 11, 7, 2, 9, 10];
// let sum = 0
// values.forEach((x,i) => {sum = sum + x})
// console.log(sum)
// let max = Math.max(...values)
// console.log(max)

// let x 
// let words = []
// while (x != "stop"){
//     x = prompt("type a word")
//     if(x != "stop"){
//         words.push(x)
//     }
// }
// for (const word of words) { console.log(word)}
//first task
function camelize(str){
    let arr = str.split("-");

    arr.forEach((x, i) => {
        if(i > 0){
        let string = x.split('');
        string[0] = string[0].toUpperCase();
        arr[i] = string.join('');
        }});
     
    return str = arr.join('')  
    

}
console.log(camelize("my-short-string"))


//second task
function filterRange(arr, a, b){
    return arr.filter(item => (item >= a && item <= b))
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

console.log(filtered)

console.log(arr)


//third task


function filterInPlace(arr, a, b){
    for(i=0; i<=arr.length; i++){
        if(a <= arr[i] || arr[i] <= b){
            arr.splice(i,1);
            i--;
        }
    }
}

//fourth task

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }

let arr2 = [5, 2, 1, -10, 8];

arr2.sort(compareNumeric)

console.log(arr2)