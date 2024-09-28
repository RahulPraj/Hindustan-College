// var a = 10;

// function fun(){
//     console.log("i am learning js");
// }

// fun();
// console.log(a);

// --------
// console.log(a);
// fun();

// var a = 10;

// function fun(){
//     console.log("i am learning js");
// }

// -----------
// console.log(a);
// fun();

// let a = 10;

// function fun(){
//     console.log("i am learning js");
// }


// 

// function a(b){
//     console.log("i am inside A");
//     b();
// }

// function b(){
//     console.log("i am inside B");

// }

// cas1
// a(b);

// ------------
function a(){
    console.log("i am inside A");
    function b(){
        console.log("i am inside B");
    
    }
   return b();
}

let ans = a();
console.log(ans);