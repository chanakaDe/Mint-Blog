/**
 * Created by chanaka on 9/15/15.
 */
function IndexController($scope, $location) {

    $scope.viewMenu = function () {
        $location.path("/post");
    }

}