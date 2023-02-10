function strCount(str){
    var str2= str.slice(1);
   
    console.log(str.length);
     if(str.length== ""){
        return 0;}
    
     else{ debugger;
        console.log(str2.length);
       return str.length - str2.length+ strCount(str2);
    }
}
    
let s="Sandeep Palai";
console.log(strCount(s));