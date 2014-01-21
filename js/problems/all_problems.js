define(['jquery','under'], function($, under){
   return new function(){
      var self = this;
      // PROBLEM 1
      self.solveOne = function(){
         var button = $("#button1");

         button.click(function(e){
            e.preventDefault();
            // Grab the input for max number in range
            var max = $("#max").val();

            var nums = []
            // Create an array with all numbers up to the max
            for(var i = 0; i < max; i++){
               nums.push(i);
            }

            var num1 = $("#num1").val();
            var num2 = $("#num2").val();

            var multiples = []
            // Create a new array with all multiples of num1 and num2 found in max range
            for(var i = 0; i < nums.length; i++){
               if(nums[i] % num1 == 0 || nums[i] % num2 === 0 ){
                  multiples.push(nums[i]);
                  // Need to remove 0
               }
            }

            var sum = 0
            // Sum all the multiples of max range
            for(var i = 0; i < multiples.length; i++){
               sum += multiples[i];
            }

            // Fill the span HTML element with the answer of sum
            $("#problem1").text(sum);
         });
      }

      // PROBLEM 2
      self.solveTwo = function(){
         var button = $("#button2");

         button.click(function(e){
            e.preventDefault();

            var sequence = [];

            // Setting values to be used in calculating the Fibonacci sequence
            var valx = 1;
            var valy = 2;
            var valz = 0;

            // Populating the sequece array with the first two values
            sequence.push(valx);
            sequence.push(valy);

            // Calculating the Fibonacci sequence
            do{
               sequence.push(valx + valy);
               valz = valy;
               valy += valx; 
               valx = valz;
            } while(valy + valx < 4000000);

            // Filling the HTML element with the sequence values separated by a comma
            window.setTimeout(function(){$("#sequence").text(sequence.join(', '))}, 1000);

            var evens = [];

            // Only storing the even values from the Fibonacci sequence
            for(var i = 0; i < sequence.length; i++){
               if(sequence[i] % 2 == 0){
                  evens.push(sequence[i]);
               }
            }

            // Filling the HTML element with the sequence values separated by a comma
            window.setTimeout(function(){$("#evens").text(evens.join(', '))}, 2000);

            // Calculating the sum of the even value in the Fibonacci sequence under 4 million
            var sum = 0;
            for(var i = 0; i < evens.length; i++){
               sum += evens[i];
            }
            // Filling the HTML element with the sequence values separated by a comma
            window.setTimeout(function(){$("#problem2").text(sum)}, 3000);
         });
      }


      // PROBLEM 3
      self.solveThree = function(){
      // The prime factors of 13195 are 5, 7, 13 and 29.
      // What is the largest prime factor of the number 600851475143 ?
        var button = $("#button3");

         button.click(function(e){


          $("#problem3").text(answer)
         });

      }
   }
});