/**
 * Created by chanaka on 10/21/15.
 */
function AccountController($scope, storyService, $location) {

    /**
     * Get all saved stories from the server.
     */
    storyService.getStories().success(function (data) {
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