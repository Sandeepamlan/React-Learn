

let input = "({[]})";
let input2= ")()()(";
let input3 = "{[()[]]()}";
  
let map= new Map ([]);
   map.set( "[" , "]" );
   map.set( "{" , "}");
   map.set(  "(" , ")");   



function checkForValidParenthesis(str){
    let stack = [];
    let i =0;
    while (i !== str.length){
        let char = str[i];
        if(map.has(char)) {
            stack.push(map.get(char));
        }
        else{
            if(stack[stack.length-1] === char){
                stack.pop();
            }else {
                return false;
            }
        }
        i++;
        } return stack.length===0;
}

        
        
let result= checkForValidParenthesis(input)
console.log(result)
let result2= checkForValidParenthesis(input2)
console.log(result2)
let result3= checkForValidParenthesis(input)
console.log(result3)