$(function(){
   var nums = []
   for(i = 0; i < 1000; i++){
      nums.push(i);
   }
   // console.log(nums);

   var multiples = []
   for(i = 0; i < nums.length; i++){
      if(nums[i] % 3 == 0 || nums[i] % 3 === 0 ){
         multiples.push(nums[i]);
         // Need to remove 0
      }
   }
   // console.log(multiples);

   var sum = 0
   for(i = 0; i < multiples.length; i++){
      sum = multiples[i]++;
   }
   console.log(sum);
});
