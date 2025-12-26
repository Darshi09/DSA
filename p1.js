// arr = [1,2,3,4,5,6,7,8,9]

//access the data 
// for (let i =0;i<arr.length;i++){
//   console.log(arr[i])
// }

// insert the data 
// let newpos = 5
// let newvalue = 100

// for(let i= arr.length-1; i>=0 ;i--){
//   if(i>= newpos){
//     arr[i+1] = arr[i]
//     if (i== newpos){
//       arr[i] = newvalue
//     }
//   }
// }
// console.log(arr)

//deletetion
// let newpos = 3;

// for (let i=newpos; i<arr.length; i++){
//   arr[i]=arr[i+1]
// } 
// arr.length = arr.length-1
// console.log(arr)


// start
let arr = [11,22,33,22,33,55,67,76,44,99,88]
let newpos = 6 
let newvalue = 1000

// asscess 
// for (let i=0 ; i<= arr.length-1 ; i++){
//   console.log (arr[i])
// }

// insert
// for (i= arr.length-1; i>=0; i--){
//   if (i >= newpos){
//     arr[i+1] = arr[i]
//     if (i==newpos){
//       arr[i]=newvalue
//     }
//   }
// }
// console.log(arr)

//delete
// for (i=newpos;i<arr.length; i++){
//   arr[i] = arr[i+1]
// }
// arr.length = arr.length-1
// console.log(arr)
 
let search = 11

for(let i=0;i<arr.length-1;i++){
  if(arr[i] == search){
    console.log(`array of position ${i} is ${arr[i]}`)
    break;
  }
}