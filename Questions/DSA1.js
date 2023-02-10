// Function candidate has to implement
function sortingMachine(a, n)
{
    let count=0;
   
  for(let i=0;i<n-1;i++){
     
        if(a[i]==1){
              let swap=a[i];
              a[i]=a[i+1];
              a[i+1]=swap;
              console.log(a);
           }
           else{ console.log("Array is Already sorted");}
      
   
  count++;
  }
  return count;
}

//Driver Code
var t =1;
while(t--)
{
  var n = 3
  //var temp = n.trim();
  //var s = n.split(" ");
  var s= [1,0,0];
  for(i=0;i<n;i++)
  {
    s[i]=Number(s[i]);
  }
  console.log(s);
  var num  = sortingMachine(s,n);
  console.log(num);
}