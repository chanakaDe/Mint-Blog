/**
 * Created by chanaka on 10/10/15.
 */
function UserController($scope, userService, $location, $window) {

    $scope.user = {name: "", username: "", password: "", confirmPassword: ""};

    $scope.processing = true;
    $scope.errors = [];

    /**
     * Getting all registered users from the system.
     */
    userService.all()
        .success(function (data) {
            $scope.users = data;
            console.log(data);
        });

    $scope.validatePassword = function () {
        if ($scope.user.password != $scope.user.confirmPassword) {
            document.getElementById("password").style.backgroundColor = "#FFB2B2";
            document.getElementById("register-password2").style.backgroundColor = "#FFB2B2";
        } else {
            document.getElementById("password").style.backgroundColor = "#66FF66";
            document.getElementById("register-password2").style.backgroundColor = "#66FF66";
        }
    };

    $scope.signupUser = function () {

        $scope.errors = [];
        if ($scope.user.name == '') {
            document.getElementById("register-name").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("register-name").style.backgroundColor = "white";
        }
        if ($scope.user.username == '') {
            document.getElementById("register-username").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("register-username").style.backgroundColor = "white";
        }
        if ($scope.user.password == '') {
            document.getElementById("password").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("password").style.backgroundColor = "white";
        }
        if ($scope.user.confirmPassword == '') {
            document.getElementById("register-password2").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("register-password2").style.backgroundColor = "white";
        }
        if ($scope.errors.length > 0) {
            return
        }

        var user = $scope.user;
        delete user["confirmPassword"];
        console.log(user);
        $scope.message = '';

        userService.create(user).then(function (data) {
            console.log(data);
            $scope.user = {};
            $scope.message = data.data.message;
            $window.localStorage.setItem('token', data.data.token);
            $location.path('/');
        })
    }

}