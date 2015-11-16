/**
 * Created by chanaka on 10/10/15.
 */
module.factory('userService', function ($http) {

    var userService = {};

    /**
     * Create a new user with userId , username, name ,email and password.
     * @param user
     * @returns {*}
     */
    userService.create = function (user) {
        return $http.post(host.signup, user)
    };

    /**
     * Get all saved users from the database.
     * @returns {*}
     */
    userService.all = function () {
        return $http.get(host.users)
    };

    /**
     * Get logged user information.
     * To get this, user must be logged in.
     * @returns {*}
     */
    userService.myInfo = function () {
        return $http.get(host.me)
    };

    /**
     * Check email whether its existing or not and send response to front end.
     * @param email
     * @returns {*}
     */
    userService.checkEmail = function (email) {
        return $http.get(host.searchUserWithEmail + '?email=' + email)
    };

    return userService;

});