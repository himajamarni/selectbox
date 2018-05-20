'use strict';
var selectBoxApp = angular.module('selectBoxApp');
selectBoxApp.directive('selectbox',function(){
  return{
    restrict:'E',
    //transclude: true,
    scope: {
      list1Items: '=',
      list2Items: '=',
    },
    controller: 'HomeCtrl',
    templateUrl:'views/home.html'
  };
});


selectBoxApp.controller('HomeCtrl',['$scope', '$location','$rootScope','listService',
  function($scope, $location, $rootScope, listService) {
        $scope.btnRight = function(){
          copyFunction($scope.list1,$scope.list2,$scope.list2Items,$scope.list1Items)
        };

        $scope.btnLeft = function () {
           copyFunction($scope.list2,$scope.list1,$scope.list1Items,$scope.list2Items)
         };
         $scope.onhover = function(){
           $scope.hoverclass = 'hovercolorclass';
        };

        $scope.onleave = function(){
          $scope.hoverclass = '';
       };


        $scope.submit = function() {
          $scope.itemsDirective = false;
          var name ='';
          angular.forEach($scope.list1Items, function(value){
                name  += (value.name)+', ';

          });
          name = name.substring(0,(name.length)-2);
          debugger;
          $rootScope.availableItems = (name);
          $rootScope.selectedItems = $scope.list2Items;
          listService.addSelectedItems($scope.list2Items);
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

    function copyFunction(fromList, toList, toListItems,fromListItems,selectOption) {
       //It moves the selected items to list2
       angular.forEach(fromList, function (value, key) {
           toListItems.push(value);
        });

       //It remove the ones that were moved from the list1.
        angular.forEach(fromList, function (value, key) {
          for (var i = fromListItems.length - 1; i >= 0; i--) {
              if (fromListItems[i].name == value.name) {
                 fromListItems.splice(i, 1);
              }
           }
        });
     };
