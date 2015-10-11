/**
 * Created by chanaka on 10/5/15.
 */
function AddNewPostController($scope, storyService) {

    $scope.previewContent = function () {
        $scope.title = $scope.story.title;
        $scope.content = $scope.story.content;
        $scope.showPreview = true;
    };

    /**
     * Create a new story and also push newly added story to the current story array.
     */
    $scope.makeNewStory = function () {

        var story = $scope.story;
        console.log(story);

        storyService.createStory(story).success(function (data) {
            console.log(data);
            $.notify("NEW STORY ADDED SUCCESSFULLY", "success");
            $scope.story = {};
            $scope.message = data.message;
            //$scope.stories.push(data);
        });
    };

}