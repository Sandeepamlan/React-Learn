function count(S , m , n )
{
	// use process.stdout.write("hello") to print the output
  	//implement your  logic here - you dont have to return anything, print the output here
    if(n==0){
        return 1;
    }

    if (n<0){
        return 0;
    }

    if(m<=0){
        return 0;
    }

    return count(S,m-1,n) + count(S,m,n-S[m-1]);

}
// Driver program to test above function

a=[1,2,3,4,5,6];
b=10;
var n = parseInt(b);
var arr = a;
var m = arr.length;

console.log( count(arr, m, n));