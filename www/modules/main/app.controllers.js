angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, ionicToast) {

    $scope.showToastTop = function(){
      ionicToast.show('This is a toast at the top.');
    };

    $scope.showToastMiddle = function(){
      ionicToast.show('This is a toast at the middle.', 'middle',false, 1000);
    };

    $scope.showToastBottom = function(){
      ionicToast.show('This is a toast at the bottom.', 'bottom',false, 2000);
    };

  })

.controller('ReferenceCtrl', function($scope, Chats) {

})

.controller('ContactCtrl', function($scope) {

});
