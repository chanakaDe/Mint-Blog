/**
 * Created by chanaka on 10/10/15.
 */
module.factory('userService', function ($http) {

    var userService = {};

    userService.create = function (user) {
        return $http.post(host.signup, user)
    };
    userService.all = function () {
        return $http.get(host.users)
    };

    return userService;

});