"use strict"

// factorial
function factorial(x) {
    let m=1;
    for (let i= 1; i<= x; i++) {
        m *= i;
    }
    return m;
}
    let a = 5;
    console.log(factorial(a))


// fibonacci

function fibonacci(y){
    let v = 1;
    let z = 0;
    let result=[0, 1 ]
    let q ;
    for (let i=2; i<=y; i++){
        q = v+z;
        z = v;
        v = q;
      
        result.push(q);
    }
    return result;
}
let b = 10;
console.log(fibonacci(b))

// prime

function prime(w){
     let result2=[]
  
    for(let i=1; i<=w; i++){
     let c = 0
    

     for(let p=1; p<=i; p++){
        if (i%p === 0 )
            c++;

    }

    if (c<3 )
        result2.push(i)
}
return result2;

}
let d = 20;
console.log(prime(d));

//  2D array

function array_2D(array){
     let arr1
     let arr=[]

for (let i=0; i<=array.length-1; i++){

    for (let q=0; q<=array[i].length; q++){
        arr.push(array[i][q])
        }
        arr1 = arr.toString();
}
    return arr1;
}
let z=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(array_2D(z));

//  2D array
    
    function reverse_order(reverse){
        let x=" "
        for (let i=reverse.length-1; i>=0; i--){
            x+= reverse[i]+" ";
        }
        return x;
    }
    let input= [1, 2, 3, 4, 5];
    console.log(reverse_order(input));

// 

