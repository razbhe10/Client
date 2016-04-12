var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, $timeout) {
  $scope.array = ['1','2','3'];
  
  $scope.removeItem = function(index)
  {
    $scope.array.splice(index, 1);
  }
  
   $scope.addItem = function(item){
     if(item != null)
         $scope.array.push(item);
     
     $scope.newItem = null;
  }
  
  
   $timeout(function(){
     $http.get('http://jsonplaceholder.typicode.com/posts/1').then(
       function(res)
       {
         var strings = res.data.title.split("\n");
         for (index in strings) {
           $scope.array.push(strings[index]);
         }
         
       },
  
      function(res)
      {
         debugger;
      })
  },500)
});
