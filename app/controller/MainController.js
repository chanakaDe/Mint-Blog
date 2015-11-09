/**
 * Created by chanaka on 10/8/15.
 */
function MainController($rootScope, $location, Auth, $scope, $route) {

    /**
     * Initializing user object.
     * @type {{username: string, password: string}}
     */
    $scope.user = {
        username: "",
        password: ""
    };
    $scope.errors = [];

    $scope.loggedIn = Auth.isLoggedIn();

    $rootScope.$on('$routeChangeStart', function () {
        $scope.loggedIn = Auth.isLoggedIn();
        Auth.getUser().then(function (data) {
            $scope.user = data.data;
        });
    });

    $scope.doLogin = function () {

        $scope.errors = [];
        if ($scope.user.username == '') {
            document.getElementById("login-username").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("login-username").style.backgroundColor = "white";
        }
        if ($scope.user.password == '') {
            document.getElementById("login-password").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("login-password").style.backgroundColor = "white";
        }
        if ($scope.errors.length > 0) {
            return
        }

        console.log("Login controller");
        $scope.processing = true;
        $scope.error = '';

        Auth.login($scope.user.username, $scope.user.password).success(function (data) {
            $scope.processing = false;
            Auth.getUser().then(function (data) {
                $scope.user = data.data;
            });
            if (data.success) {
                $location.path('/')
            } else {
                $scope.error = data.message;
            }
        });
    };

    $scope.doLogout = function () {
        Auth.logout();
        //$location.path('/logout');
        $route.reload();
    };

    $scope.getSearchCategory = function (category) {
        $location.path('/search/' + "no_query" + '/' + category);
    };

}