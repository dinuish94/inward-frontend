angular.module('register',[]).controller('userController',['$scope','$http','$window',function userCtrl($scope,$http,$window){

    $scope.check = () => {
        console.log("load");
    }

    $scope.check();
    $scope.saveUser = (user) => {
        $http.post('/users/register',user).then(game => {
           $window.location.href='login'; 
        });
    }

    $scope.login = (user) => {
        console.log(user);
        $http.post('/users/login',user).then(game => {
           $window.location.href='/';
           console.log(game); 
        });
    }
}]);