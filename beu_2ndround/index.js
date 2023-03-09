// You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// NOTE:
// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.
// You can use any editor of your choice.


 let  Arr = [1,2,3,4,5,6,7,8,9,10];
 let N = 10;
 let K = 3;
 let output= [4,5,6,7,8,9,10,1,2,3];
 
  
 console.log(rotationofanarray(Arr,K))
  
 function rotationofanarray(Arr,K){
   
   const N=Arr.length
   
   K%=N;
   
   for(let i=0;i<K;i++){
      const felem=Arr[0];
      
      for(let j=0;j<N-1;j++){
        Arr[j]-Arr[j+1];
      }
      
      Arr[N-1]=felem
   }
   return Arr;
   
 }