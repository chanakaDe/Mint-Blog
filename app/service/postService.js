/**
 * Created by chanaka on 10/4/15.
 */

module.factory('postService', function ($http) {

    var postService = {

        getAllBookings: function () {

            return $http({
                method: "GET",
                headers: nodeHeaders,
                url: host.post
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return postService;
});