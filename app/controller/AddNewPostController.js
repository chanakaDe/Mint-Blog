/**
 * Created by chanaka on 10/5/15.
 */
function AddNewPostController($scope, storyService, $location) {

    /**
     * Initializing story object.
     * @type {{category: string, title: string, content: string}}
     */
    $scope.story = {
        category: "",
        title: "",
        content: ""
    };
    $scope.errors = [];

    $scope.previewContent = function () {
        $scope.title = $scope.story.title;
        $scope.content = $scope.story.content;
        $scope.showPreview = true;
    };

    /**
     * Create a new story and also push newly added story to the current story array.
     */
    $scope.makeNewStory = function () {
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
        story.publishStatus = 1;
        console.log(story);

        storyService.createStory(story).success(function (data) {
            console.log(data);
            $scope.story = {
                category: "",
                title: "",
                content: ""
            };
            //Showing the response message.
            if (data.code == 200) {
                $.notify("NEW STORY ADDED SUCCESSFULLY", "success");
                $location.path('/');
            } else {
                $.notify("SOMETHING WENT WRONG. PLEASE TRY AGAIN", "error");
            }
        });
    };

    $scope.draftNewStory = function () {

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
        story.publishStatus = 0;
        console.log(story);

        storyService.createStory(story).success(function (data) {
            console.log(data);
            $scope.story = {
                category: "",
                title: "",
                content: ""
            };
            //Showing the response message.
            if (data.code == 200) {
                $.notify("NEW STORY ADDED SUCCESSFULLY AND SAVED AS A DRAFT", "success");
                $location.path('/');
            } else {
                $.notify("SOMETHING WENT WRONG. PLEASE TRY AGAIN", "error");
            }
        });
    };

}