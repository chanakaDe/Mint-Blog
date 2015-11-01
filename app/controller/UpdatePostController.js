/**
 * Created by chanaka on 10/28/15.
 */
function UpdatePostController($scope, $routeParams, storyService, $location) {

    /**
     * Initializing story object.
     * @type {{title: string, content: string}}
     */
    $scope.story = {
        title: "",
        content: ""
    };

    var storyId = $routeParams['storyId'];
    console.log("Story id : ", storyId);

    /**
     * Request a specific story with story id from server.
     */
    storyService.getSpecificStory(storyId).success(function (data) {
        $scope.storyData = data[0];
        console.log(data);
        $scope.story.title = $scope.storyData.title;
        $scope.story.content = $scope.storyData.content;
        $scope.story.category = $scope.storyData.category;
    });

    /**
     * Update Existing story in the database.
     */
    $scope.updateStory = function () {

        var story = $scope.story;
        story.storyId = storyId;
        story.publishStatus = 1;
        console.log(story);

        storyService.updateExistingStory(story).success(function (data) {
            console.log(data);
            $.notify("STORY UPDATED SUCCESSFULLY", "success");
            $scope.story = {};
            $location.path('/');
        });
    };

    $scope.updateDraft = function () {

        var story = $scope.story;
        story.storyId = storyId;
        story.publishStatus = 0;
        console.log(story);

        storyService.updateExistingStory(story).success(function (data) {
            console.log(data);
            $.notify("DRAFT UPDATED SUCCESSFULLY", "success");
            $scope.story = {};
            $location.path('/my_account');
        });
    }

}