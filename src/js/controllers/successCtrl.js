var selectBoxApp = angular.module('selectBoxApp');

selectBoxApp.controller('successCtrl',['$scope', '$location',
  function($scope, $location) {

debugger;

        $scope.submit = function() {
             $location.path('/success');
             // var finalList = [];
             //   angular.forEach($scope.list2Items, function(value,key){
             //   $scope.selectedList.push((value));
             // });
             //
             // console.log("selected values a are:");
             // angular.forEach($scope.selectedList[0], function(value, key){
             //   finalList.push(value['name']);
             //   console.log(value['name']);
             //
             // });
            // alert("the selected values are:" +finalList);
       };


    }]);
