'use strict';
var selectBox = angular.module('selectBoxApp');
selectBox.directive('selectbox',function(){
  return{
    restrict:'AEC',
    transclude: true,
    $scope: {
      list1:'@',
      list2:'@',
      list1Items:'@',
      list2Items:'@',
      DefaultListItems:'@',
      name:'@',
      selectOption:'&'
    },
    controller: 'HomeCtrl',
    templateUrl:'views/home.html'

  };
});

selectBox.controller('HomeCtrl',['$scope',
  function($scope){
    $scope.selectOption = 0;
      $scope.list1 = [];
      $scope.list2 = [];
      $scope.list2Items = [
          []
      ];
      $scope.list1Items = [
          []
      ];

      $scope.DefaultListItems = [
        [{
            name: 'right1'
        }, {
            name: 'right2'
        }, {
            name: 'right3'
        }, {
            name: 'right4'
        }, {
            name: 'right5'
        }, {
            name: 'right6'
        }],
      ];

        $scope.DefaultList2Items = [
          [{
              name: 'left1'
          }, {
              name: 'left2'
          }, {
              name: 'left3'
          }, {
              name: 'left4'
          }, {
              name: 'left5'
          }, {
              name: 'left6'
          }],

                  ];

    angular.copy($scope.DefaultListItems, $scope.list1Items);
          $scope.btnRight = function () {
            //move selected.
              angular.forEach($scope.list1, function (value, key) {
                  this.push(value);
                  }, $scope.list2Items[$scope.selectOption]);

                      //remove the ones that were moved.
     angular.forEach($scope.list1, function (value, key) {
        for (var i = $scope.list1Items[$scope.selectOption].length - 1; i >= 0; i--) {
          if ($scope.list1Items[$scope.selectOption][i].name == value.name) {
              $scope.list1Items[$scope.selectOption].splice(i, 1);
                  }
                }
            });
      $scope.list1 = [];

      };
      angular.copy($scope.DefaultList2Items, $scope.list2Items);
      $scope.btnLeft = function () {
      //move selected.
      angular.forEach($scope.list2, function (value, key) {
            this.push(value);
      }, $scope.list1Items[$scope.selectOption]);

    //remove the ones that were moved from the source container.
    angular.forEach($scope.list2, function (value, key) {
      for (var i = $scope.list2Items[$scope.selectOption].length - 1; i >= 0; i--) {
          if ($scope.list2Items[$scope.selectOption][i].name == value.name) {
                            $scope.list2Items[$scope.selectOption].splice(i, 1);
                              }
                          }
                      });
                      $scope.list2 = [];
                  };
              }
])
