define(['AV'],function () {
  "use strict";
  var factory = function () {
      return {
        checkUser:function(obj){


          var promise = new Promise(function(resolve, reject) {
            // 做一些异步操作的事情，然后……
            AV.User.logIn(obj.username, obj.password).then(function() {
              // 成功了，现在可以做其他事情了
               console.log('成功了');
               resolve("Stuff worked!");

            }, function() {
              // 失败了
              console.log('失败了');
              reject(Error("It broke"));
            });
          });

          return promise;

        },
        saveUser:function(obj){
          var user = new AV.User();
          user.set('username', obj.username);
          user.set('password', obj.password);
          // user.set('email', 'hang@leancloud.rocks');
          return user.signUp();
        }
      };
  }
  factory.$inject = [];
  return factory;
})
