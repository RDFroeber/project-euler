require.config({
  baseUrl: 'js',
  paths  : {
    // Config jQuery path
    jquery        : 'lib/jquery/jquery-1.10.2.min',
    // Config jQuery path
    under         : 'lib/underscore-min',
    // Config problems paths
    problems      : 'problems/all_problems'
  }
});

require(['jquery', 'under', 'problems'], function($, under, problems){
  $(function(){
    problems.solveOne();
    problems.solveTwo();
    problems.solveThree();
  });
});