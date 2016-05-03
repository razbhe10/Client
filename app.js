var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, $timeout) {
  $scope.array = [];
  $scope.arrayIndex = [];
  var serverUrl = '/tasks';
  
  $scope.removeItem = function(index)
  {
    $scope.array.splice(index, 1);
  }
  
  $scope.refresh = function(){
     $http.get(serverUrl).then(
       function(res)
       {
         $scope.array = [];
         for (var index in res.data) {
           $scope.array.push("ID: " + res.data[index].id + "    Description: " + res.data[index].description);
           $scope.arrayIndex.push(res.data[index].id);
         }
         
       },
  
      function(res)
      {
      });
      }
      
    $scope.addItem = function(newItem){
    var t = JSON.stringify({"description": newItem});
    $http.post(serverUrl, t).then(function(result){
    $scope.array.push(result.data);
    });
    };
    
    $scope.removeItem = function(index){
    $http.delete(serverUrl+'/'+ $scope.arrayIndex[index]).then(function(result){
    $scope.array.splice(index, 1);
    $scope.arrayIndex.splice(index, 1);
    });
    };
});
