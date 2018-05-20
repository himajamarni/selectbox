var selectBoxApp = angular.module('selectBoxApp',['ngRoute'])
.config([
  '$routeProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
       // .when('/',{
       //   templateUrl: '/views/home.html',
       //   controller: 'HomeCtrl',
       //   css: 'css/home.scss'
       // })
       .when('/success',{
         templateUrl: 'views/success.html',
         controller: 'HomeCtrl',
         // css: 'css/home.css'
       });
  }
]);

selectBoxApp.service('listService',function(){
  var submitedItems = [];

  var addSelectedItems = function(items){
    submitedItems = items;
  }

  var getSelectedItems = function(){
    return submitedItems;

  }
  return{
    addSelectedItems:addSelectedItems,
    getSelectedItems:getSelectedItems
  }

});
