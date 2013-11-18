$(function(){
   var button = $("button");

   button.click(function(e){
      e.preventDefault();
      var max = document.getElementById("max").value

      var nums = []
      for(i = 0; i < max; i++){
         nums.push(i);
      }
      // console.log(nums);

      var num1 = document.getElementById("num1").value
      var num2 = document.getElementById("num2").value

      var multiples = []
      for(i = 0; i < nums.length; i++){
         if(nums[i] % num1 == 0 || nums[i] % num2 === 0 ){
            multiples.push(nums[i]);
            // Need to remove 0
         }
      }
      // console.log(multiples);

      var sum = 0
      for(i = 0; i < multiples.length; i++){
         sum += multiples[i];
      }

      $("span").text(sum);
   });
});
