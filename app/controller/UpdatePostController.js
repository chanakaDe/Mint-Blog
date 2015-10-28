/**
 * Created by chanaka on 10/28/15.
 */
function UpdatePostController($scope, $routeParams, storyService) {

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
    });

}