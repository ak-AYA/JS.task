function age (y){
 y=2024-y;
 if(y>=30)
 console.log("You are not eligible. You may join other programs");
 else if(y>=18 && y<30)
 console.log(" You are eligible. Start your application");
 else if(y<18)
 console.log(" You may join the kids' program");
 else if(y>60)
  console.log(" You may join the seniors program");
    }


    
function sCase(str) {
    let result = '';
        for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
        } else {
       result += str[i].toUpperCase();
        }
     }
     
return result;
 }

 function sCase(str) {





 let result = '';

for (let i = 0; i < str.length; i++) {
     if (i === 0 || str[i - 1] === " ") {
     result += str[i].toUpperCase();
     } else {
    result += str[i].toLowerCase();
     }
     result = result.replace(/\s+/g, ''); // 
     }
   
     return result;
}
    
console.log(sCase("Coding Academy by Orange"));