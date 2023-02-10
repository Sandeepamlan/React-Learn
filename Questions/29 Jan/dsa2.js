

function max(a,b)
{
    if(a==b)
         return a;
    else{
        if(a>b)
            return a;
        else
            return b;
       }
}
 
function railways (arr, dep,l) {
	let pfCount = 1, result=1;
    var i=1, j=0;
    for(var i=0;i<l;i++){
        result=1;
        for(var j=0;j< l;j++){
            if(i!=j){
                if(arr[i] >=arr[j] && dep[j]>=arr[i]){
                    result++;
                }
            }
        }pfCount= max( pfCount, result);
    }
	return pfCount;
}

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
let l=arr.length
console.log(railways(arr, dep,l));