/**
 * Created by chanaka on 10/28/15.
 */
function UpdatePostController($scope, $routeParams, storyService, $location) {

    /**
     * Initializing story object.
     * @type {{title: string, content: string}}
     */
    $scope.story = {
        category: "",
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

        $scope.errors = [];

        if ($scope.story.category == '') {
            document.getElementById("category").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("category").style.backgroundColor = "white";
        }
        if ($scope.story.title == '') {
            document.getElementById("title").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("title").style.backgroundColor = "white";
        }
        if ($scope.story.content == '') {
            document.getElementById("content").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("content").style.backgroundColor = "white";
        }
        if ($scope.errors.length > 0) {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                closable: true,
                closeByBackdrop: false,
                closeByKeyboard: false,
                animate: false,
                title: 'Notification',
                message: 'Please make sure all the required fields are done before saving a story'
            });

            return
        }

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

        $scope.errors = [];

        if ($scope.story.category == '') {
            document.getElementById("category").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("category").style.backgroundColor = "white";
        }
        if ($scope.story.title == '') {
            document.getElementById("title").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("title").style.backgroundColor = "white";
        }
        if ($scope.story.content == '') {
            document.getElementById("content").style.backgroundColor = "#FFB2B2";
            $scope.errors.push("Error");
        } else {
            document.getElementById("content").style.backgroundColor = "white";
        }
        if ($scope.errors.length > 0) {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                closable: true,
                closeByBackdrop: false,
                closeByKeyboard: false,
                animate: false,
                title: 'Notification',
                message: 'Please make sure all the required fields are done before saving a story'
            });

            return
        }

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
    };

    $scope.previewContent = function () {
        $scope.title = $scope.story.title;
        $scope.content = $scope.story.content;
        $scope.showPreview = true;
    };

}