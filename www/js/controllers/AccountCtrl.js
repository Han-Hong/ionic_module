//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
//修改后的文件如下
define([], function () {
  'use strict';
  function ctrl($scope,Users) {
    $scope.settings = {
      enableFriends: true
    };
    $scope.user = {
      username:'',
      password:''
    };
    $scope.login  = function(){
      // $ionicLoading.show({
      //   template: 'Loading...'
      // });
      // Leancloud.checkUser($scope.user);
      Users.checkUser($scope.user).then(function(result) {
        console.log(result); // “完美！”
        // $ionicLoading.hide();
        $state.go("tab.dash");
      }, function(err) {
        console.log(err); // Error: "出问题了"
      });
    };

      $scope.register = function(){
    
    Users.saveUser($scope.user).then(function(user) {
        // 注册成功，可以使用了
        console.log(user);

        $state.go("tab.dash");
      }, function(error) {
        // 失败了
        console.log('Error: ' + error.code + ' ' + error.message);
      });
  	};

  }

  ctrl.$inject = ['$scope','Users'];
  return ctrl;
});

