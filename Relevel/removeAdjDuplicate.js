// remove adjacent duplicates from the string

// abbaca => ca

function removeAdjacentDuplicates(str){
    let stack= [];
    for( let i =0; i< str.length; i++){
        if(stack[stack.length -1] === str[i]){
            stack.pop();

        }else {
            stack.push(str[i]);
        }
    }
    return stack;
}


let a = "abbaca";

console.log(removeAdjacentDuplicates (a))