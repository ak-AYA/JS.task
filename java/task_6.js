"use strict"
//for
console.log("even numbers");
for(let i=1;i<=50;i++){
if(i%2===0)
console.log(i);
} 

//while
let i=2;
while(i<=50){
 console.log(i);
  i+=2;
}
//////
console.log("even numbers");
for(let i=1;i<=50;i++){
if(i%2===0)
console.log(i);
}

//////
let arr8=[];
for(let i=1;i<=100;i++){

     if(i%15===0)
     console.log("FizzBuzz",);
     else if(i%5===0)
     console.log("Buzz");
     else if(i%3===0)
     console.log("Fizz");
     else console.log(i);
}

console.log(arr8.join(','));
    
    function fizzbuzz(num){
    if(num===0)
     return;
     if(num%15===0)
     console.log("FizzBuzz");
     else if(num%5===0)
     console.log("Buzz");
     else if(num%3===0)
     console.log("Fizz");
     else console.log(num);
}
//////
function fizzbuzz(num){
     if(num===0)
     return;
     if(num%15===0)
     console.log("FizzBuzz");
     else if(num%5===0)
     console.log("Buzz");
     else if(num%3===0)
     console.log("Fizz");
     else console.log(num);
    }
//////
    function convert (num,str){
         const arr =[];
         for(let i=0;i<str.length;i++){
         while(num>=str[i]){
         num-=str[i];
         arr.push(str[i])
         }
         }
         return arr;
    }

//////
    function counts (str,ch){
         let count=0;
        for(let i=0;i<str.length;i++){
         if(str[i].toLowerCase()==ch.toLowerCase())
        count++
        }
     return count;
        }
    console.log(counts)


//////
    //a
    for(let i=0 ; i<=20;i++)
    {
     console.log(i);
    }
    //b
    for(let i=3 ; i<=29;i++)
    {if(i%2!=0)
     console.log(i);
    }
    //c
    for(let i=12 ; i>=-14;i--)
    {if(i%2==0)
     console.log(i);
    }
    //d
    for(let i=50 ; i>=20;i--)
    {if(i%3==0)
    console.log(i);
    }

    ///////
    let str = "CodingAcademy";
let arr = [7, 500, "KH404", "black", 36];

for(let i=0 ; i<arr.length;i++)
{
 console.log(arr[i]);
}
for (let i=str.length-1;i>=0;i--){
 console.log(str[i]);
}
///////

const num=[7,23,18,9,-13,38,-10,12,0,124];
const even=[];
const odd=[];
for(let i=0;i<num.length;i++){
if (num[i]%2==0)
even.push(num[i]);
else odd.push(num[i]);
}
console.log("even numbers:",even);
console.log("odd numbers:",odd);
///////

function gmeals(numM) {
     let protein = ["chicken", "noodles", "tofu", "beef", "fish", "beans"];
     let grain = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
     let vegetable = ["peas", "green beans", "kale", "edamame", "broccoli", "asparagus"];
     let beverage = ["juice", "milk", "water", "soy milk", "soda", "tea"];
     let dessert = ["apple", "banana", "more kale", "ice cream", "chocolate", "kiwi"];
    
     let total = protein.length * grain.length * vegetable.length * beverage.length * dessert.length; //اكبر عدد ممكن بدون تكرار
    
     if (numM > total) {
     console.log("Can't Generate This Number Of Meals");
     return [];
     }// بتاكد انو العدد المطلوب اقل من اكبر عدد ممكن
    
     const allM = new Set();
    
    
    while (allM.size < numM) {
     let proteins = protein[Math.floor(Math.random() * protein.length)];
     let grains = grain[Math.floor(Math.random() * grain.length)];
     let vegetables = vegetable[Math.floor(Math.random() * vegetable.length)];
     let beverages = beverage[Math.floor(Math.random() * beverage.length)];
     let desserts = dessert[Math.floor(Math.random() * dessert.length)];
    
     //Cبضيف الاختيار العشوائي 
     const meal = {proteins, grains, vegetables, beverages, desserts};
    
     // عشان اتاكد انو ما في تكرار
     allM.add(meal);
    }
    
     return Array.from(allM);
    }

    //ـجريب
    const test = gmeals(8000);
    console.log(test);
