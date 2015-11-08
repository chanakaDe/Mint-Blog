/**
 * Created by chanaka on 11/1/15.
 */
function SearchController($scope, storyService, $routeParams, $location) {

    var query = $routeParams['query'];
    console.log(query);
    $scope.query = query;

    console.log($routeParams['category']);

    if ($routeParams['category'] == "no_category") {
        console.log("NULL ACTIVATED");
        /**
         * Loading data on page load.
         */
        search(query);
    } else {
        console.log("ELSE ACTIVATED");
        searchCategory($routeParams['category']);
    }


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
     * Search category on click.
     * @param category
     */
    $scope.searchCategoryOnClick = function (category) {
        storyService.searchAllStoriesWithCategory(category).success(function (data) {
            $scope.stories = data;
            console.log(data);

            if (data == '') {
                $scope.showNullError = true;
            } else {
                $scope.showNullError = false;
            }
        });
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

    /**
     * Searching all the stories with the given category.
     * @param category
     */
    function searchCategory(category) {
        storyService.searchAllStoriesWithCategory(category).success(function (data) {
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