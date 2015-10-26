/**
 * Created by chanaka on 10/21/15.
 */
function AccountController($scope, storyService, $location, userService) {

    ///**
    // * Loan my details.
    // */
    //userService.myInfo().success(function (data) {
    //    $scope.me = data;
    //    console.log(data);
    //});

    /**
     * Get all saved stories from the server.
     */
    storyService.getUserStoryWithId().success(function (data) {
        $scope.stories = data;
        console.log(data);
    });

    /**
     * Load story data with provided story id.
     * @param storyId
     */
    $scope.loadFullStory = function (storyId) {
        console.log("Story id : " + storyId);
        $location.path('/post/' + storyId);
    };

    $scope.openDeleteModal = function () {
        $('#deleteConfirmationModal').modal('show');
    }

}