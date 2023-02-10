


function greaterNearestElement(arr){
    let stack =[];
    for (let i=0;i<arr.length; i++)
    {
        if(stack.length==0){
             stack.push(arr[i]);
        }
        else{
            while (stack.length!==0 && arr[i] > stack[stack.length-1]){
            console.log(stack.pop() ,"==>",arr[i]);
        }stack.push(arr[i])
    }

    
    }while (stack.length!==0){
        console.log(stack.pop(), "==>", -1);
}
}


let arr =[2,7,3,5,4,6,8]
//let arr = [5,4,3,2,1]
greaterNearestElement(arr)