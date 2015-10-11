/**
 * Created by chanaka on 10/5/15.
 */
function AddNewPostController($scope, storyService) {

    $scope.previewContent = function () {
        $scope.title = $scope.story.postTitle;
        $scope.content = $scope.story.postContent;
        $scope.showPreview = true;
    };

    /**
     * Create a new story and also push newly added story to the current story array.
     */
    $scope.makeNewStory = function () {

        var story = $scope.story;

        storyService.createStory(story).success(function (data) {
            console.log(data);
            $scope.story = {};
            $scope.message = data.message;
            $scope.stories.push(data);
        });
    };

}