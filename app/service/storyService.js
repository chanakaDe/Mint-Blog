/**
 * Created by chanaka on 10/10/15.
 */
module.factory('storyService', function ($http) {

    var storyService = {};

    /**
     * Create new story and save the story in database.
     * @param story
     * @returns {*}
     */
    storyService.createStory = function (story) {
        return $http.post(host.story, story)
    };

    /**
     * Get all saved stories from database.
     * @returns {*}
     */
    storyService.getStories = function () {
        return $http.get(host.stories)
    };

    /**
     * Get a specific story with provided story id.
     * @param storyId
     * @returns {*}
     */
    storyService.getSpecificStory = function (storyId) {
        return $http.get(host.story + '?id=' + storyId)
    };

    return storyService;

});