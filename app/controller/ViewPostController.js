/**
 * Created by chanaka on 10/11/15.
 */
function ViewPostController($scope, $routeParams, storyService, $location) {

    /**
     * Scroll the html view to the top.
     */
    $("html, body").animate({scrollTop: 0}, "slow");

    /**
     * Get requested story id via Angular Route Params.
     */
    var storyId = $routeParams['storyId'];
    console.log(storyId);

    /**
     * Request a specific story with story id from server.
     */
    storyService.getSpecificStory(storyId).success(function (data) {
        $scope.storyData = data[0];
        console.log(data);
    });

    /**
     * Get search query and redirect to search results view.
     */
    $scope.getSearchQuery = function () {
        var query = $scope.story.query;
        console.log(query);
        $location.path('/search/' + query + '/' + "no_category");
    };

    /**
     * Get the search query and redirect to search page on Enter Key.
     */
    $scope.getSearchQueryOnEnter = function () {
        if (event.which === 13) {
            var query = $scope.story.query;
            console.log(query);
            $location.path('/search/' + query + '/' + "no_category");
        }
    };

    /**
     * Load all the data according to the category.
     * @param category
     */
    $scope.getSearchCategory = function (category) {
        $location.path('/search/' + "no_query" + '/' + category);
    };

}