/**
 * Created by chanaka on 10/8/15.
 */
function MainController($rootScope, $location, Auth, $scope) {

    $scope.loggedIn = Auth.isLogged();

    $rootScope.$on('$routeChangeStart', function () {
        $scope.loggedIn = Auth.isLoggedIn();
        Auth.getUser().then(function (data) {
            $scope.user = data.data;
        });
    });

    $scope.doLogin = function () {
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
        $location.path('/logout');
    }

}