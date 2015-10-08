/**
 * Created by chanaka on 8/27/15.
 */
var module = angular.module('sTeam', ['ngRoute', 'textAngular']);

/**
 * Creating system routes with Angular Routesphpmyadmin
 *
 */
module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/view/dashboard.html',
            controller: ''
        }).when('/post', {
            templateUrl: 'app/view/post.html',
            controller: ''
        }).when('/publish', {
            templateUrl: 'app/view/adPost.html',
            controller: ''
        }).when('/login', {
            templateUrl: 'app/view/login.html',
            controller: ''
        }).when('/register', {
            templateUrl: 'app/view/signup.html',
            controller: ''
        }).when('/resetPwd', {
            templateUrl: 'app/view/pwdReset.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});


var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

var nodeHeaders = {
    'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjExNTkyNGFkZjYxNDA2MzM0ZGM4Y2IiLCJuYW1lIjoiYyIsInVzZXJuYW1lIjoiYyIsImlhdCI6MTQ0Mzk3NzUxN30.Wl4xTTyW3-HAeSxZympYjdNgR8OrKxelUTNRetyJ32g'
};