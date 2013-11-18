$(function(){
   var button = $("button");

   button.click(function(e){
      e.preventDefault();
      // Grab the input for max number in range
      var max = $("#max").val();

      var nums = []
      // Create an array with all numbers up to the max
      for(i = 0; i < max; i++){
         nums.push(i);
      }

      var num1 = $("#num1").val();
      var num2 = $("#num2").val();

      var multiples = []
      // Create a new array with all multiples of num1 and num2 found in max range
      for(i = 0; i < nums.length; i++){
         if(nums[i] % num1 == 0 || nums[i] % num2 === 0 ){
            multiples.push(nums[i]);
            // Need to remove 0
         }
      }

      var sum = 0
      // Sum all the multiples of max range
      for(i = 0; i < multiples.length; i++){
         sum += multiples[i];
      }

      // Fill the span HTML element with the answer of sum
      $("span").text(sum);
   });
});
