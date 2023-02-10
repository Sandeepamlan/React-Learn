// Function candidate has to implement
function largestLength(arr, n)
{
  let arr2=[];
  
  for(let i=0;i<n;i++){
      if((arr[i] & arr[i+1]) == 0){
          arr2.push(arr[i]);
      }
  }
    
  return arr2.length;
}


//Driver Code
var n = readline();
var temp = readline().trim();
var s = temp.split(" ");
for(i=0;i<n;i++)
{
    s[i]=Number(s[i]);
}
var num  = largestLength(s,n);
print(num);