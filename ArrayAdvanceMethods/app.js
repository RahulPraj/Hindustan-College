//for-each
let arr = ['raj' , 'diya' , 'kumar' , 'hello' , 'js'];

arr.forEach(function(item , index ){
    console.log(`${item} is at index: ${index}`)
})


// map
let arr1 = [10,20,30,40,50,60]; //original array

let newArray =  arr1.map(function(item){
                    return item*item;
})

console.log(arr1)
console.log(newArray);



// filter
let arr2 = [10,20,30,40,50,69]; //original array
// let newFilteredArray =  arr2.filter(function(item){
//                             // if(item > 70){
//                             if(item > 0){
//                                 return true;
//                             }
//                             return false;
//                         })
let newFilteredArray =  arr2.filter(function(item){
                            if(item % 2 == 0){
                                return true
                            }
                            else false
                        })

console.log(arr2)
console.log(newFilteredArray)