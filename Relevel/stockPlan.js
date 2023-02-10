
function removeAdjacentDuplicates(str){
    debugger;
    let stack= [];
    let result=[];

    let map = new Map([]);
    for( let i = 0; i<str.length; i++){
        if(stack.length === 0){
            stack.push(str[i]);
            map.set(str[i],i)

        }else {
            
            while(str[i] > stack[stack.length-1]){
                let pop = stack.pop();
                let popIndex = map.get(pop);
                result[popIndex]= i;
            }
            
        }stack.push(str[i]);
        map.set(str[i], i);
    }
    
}


let arr = [100,80,60,70,60,75,85];

console.log(removeAdjacentDuplicates (arr))