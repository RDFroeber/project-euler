function solveTwo(){
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