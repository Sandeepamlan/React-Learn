// function func(x, y) 
// { 
//         if (y == 0) 
//                 return 1; 
//         else if (y%2 == 0) 
//                 return func(x, y/2)*func(x, y/2); 
//         else
//                 return x*func(x, y/2)*func(x, y/2); 
// } 


// func(2,3);

// function rec( num){
//     return (num) ? num%10 + rec(num/10):0;
//     }
// console.log(rec(4567));

// function my_recursive_function( n)
// {
//      if(n == 0)
//      return;
//      my_recursive_function(n-1);
//      console.log(n);
// }
//      my_recursive_function(10);

// function something(number) 
//      { 
//      if(number <= 0) 
//      return 1;                             
//      else 
//      return number * something(number-1); 
       
// } 
// console.log(something(4));

// function f(){
//     ans = 0
//     for i = 1 to n:
//             for j = 1 to log(i):
//                     ans += 1
//     console.log(ans)
// }

// f()

// function func(a,  b){
//     if(b==0)
//     return 0;
//     if(b==1)
//     return a;
//     return a + func(a,b-1);
    
    
//     }
    
// func(3,8)

// function print( n)
// {
// if (n == 0)
// return;
// console.log(n%2);console.log(n/2);

// }  

// print(12);

// function sum( n) {
//     if (n==0)
//     return n;
//     else
//     return n + sum(n-1);    
//     }

// sum(8)

// function f(n){
//     if(n==1){
//     console.log(1);
//     return;
//     }
//     console.log(n);
//     f(n-1);
//     }
// f(8)

// function f(x){
//     if(x==2)
//     return 2;
//     else
//     {
//     console.log("+");
//     f(x-1);
//     }
//     }
// console.log(f(6));
// function f1(b){
//     if(b==0)
//     return 0
//     else 
//     {
//     console.log("a")
//     f1(b--);
//     }
//     }
//     console.log(f1(10));

// function f(n){
//     if(n>0)
//     return (n+f(n-2));
//     }
// console.log(Number(f(10)));



// function f(N){
// let a = 0;

// for (i = 0; i < N; i++) {
    
//     for (j = i+1; j < N; j++) {
//         console.log(j)
//         a = a + i + j;
//     }
// }
// }

// console.log(f(4))


function Sc(str){
const str2= str.slice(1);
 if(str.length== ""){
    return 0;}

 else{
   return str.length - str2.length;
}
}

let s="Sandeep";
console.log(Sc(s));