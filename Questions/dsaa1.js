// Function candidate has to implement
function sortingMachine(a, n)
{
    let count=0;
   
  for(let i=0;i<n;i++){
     for( let j=i+1;j<=i+1;j++){
        if((a[i]==0) && (a[j]==1)){
              let swap=a[j];
              a[j]=a[i+2];
              a[i+2]=swap;
              console.log(a);
           }else if((a[i]==1) && (a[j]==0)){
            let swap=a[j];
              a[j]=a[i];
              a[i]=swap;
              //console.log(a);
           }
           else{ console.log("Array is Already sorted");}
      
           count++;
  
  }
 
} return count;
}


//Driver Code
var t =1;
while(t--)
{
  var n = 4;
  //var temp = n.trim();
  //var s = n.split(" ");
  var s= [0,1,0,0];
  for(i=0;i<n;i++)
  {
    s[i]=Number(s[i]);
  }
  console.log(s);
  var num  = sortingMachine(s,n);
  console.log(num);
}