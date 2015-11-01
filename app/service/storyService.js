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

    /**
     * Load all the stories registered with user.
     * @returns {*}
     */
    storyService.getUserStoryWithId = function () {
        return $http.get(host.story_of_user)
    };

    /**
     * Remove existing story with story id.
     * @param storyId
     * @returns {*}
     */
    storyService.removeStoryService = function (storyId) {
        return $http.get(host.remove_story + '?id=' + storyId)
    };

    /**
     * Update existing story in database.
     * @param story
     * @returns {*}
     */
    storyService.updateExistingStory = function (story) {
        return $http.post(host.update_story, story)
    };

    /**
     * Search all stories in server with provided query.
     * @param query
     * @returns {*}
     */
    storyService.searchAllStoriesWithQuery = function (query) {
        return $http.get(host.search_story + '?query=' + query)
    };

    return storyService;

});