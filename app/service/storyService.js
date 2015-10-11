/**
 * Created by chanaka on 10/10/15.
 */
module.factory('storyService', function ($http) {

    var storyService = {};

    storyService.createStory = function (story) {
        return $http.post(host.story, story)
    };
    storyService.getStories = function () {
        return $http.get(host.stories)
    };

    return storyService;

});