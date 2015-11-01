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
        }).when('/post/:storyId', {
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
        }).when('/my_account', {
            templateUrl: 'app/view/account.html',
            controller: ''
        }).when('/update_post/:storyId', {
            templateUrl: 'app/view/updatePost.html',
            controller: ''
        }).when('/search/:query', {
            templateUrl: 'app/view/search.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

module.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});


var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

/**
 * Creating angular text limit filter.
 */
angular.module('sTeam')
    .filter('textLimit', function () {
        return function (input, char) {
            try {
                if (isNaN(input) && input.length > char) {
                    var char = char - 1 || 0;
                    var out = [];
                    for (var i = 0; i < (char + 3); i++) {
                        out.push(input[i]);
                    }
                    return out.join('') + ".....";
                } else {
                    return input;
                }
            } catch (e) {

            }

        }
    });
