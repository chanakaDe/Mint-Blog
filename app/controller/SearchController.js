/**
 * Created by chanaka on 11/1/15.
 */
function SearchController($scope, storyService, $routeParams, $location) {

    var query = $routeParams['query'];
    console.log(query);
    $scope.query = query;

    /**
     * Loading data on page load.
     */
    search(query);

    /**
     * Inbuilt search with query.
     */
    $scope.searchMore = function (event) {
        if (event.which === 13) {
            $scope.stories = [];
            var query = $scope.story.query;
            $scope.query = $scope.story.query;
            search(query);
        }
    };

    /**
     * Load data after user press search button.
     */
    $scope.searchMoreWithButton = function () {
        $scope.stories = [];
        var query = $scope.story.query;
        $scope.query = $scope.story.query;
        search(query);

    };

    /**
     * Load story data with provided story id.
     * @param storyId
     */
    $scope.loadFullStory = function (storyId) {
        console.log("Story id : " + storyId);
        $location.path('/post/' + storyId);
    };

    /**
     * Wrapping service in a function.
     * @param query
     */
    function search(query) {
        /**
         * Load all stories with the provided query.
         */
        storyService.searchAllStoriesWithQuery(query).success(function (data) {
            $scope.stories = data;
            console.log(data);

            if (data == '') {
                $scope.showNullError = true;
            } else {
                $scope.showNullError = false;
            }
        });
    }

}