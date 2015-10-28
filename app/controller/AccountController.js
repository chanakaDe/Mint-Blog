/**
 * Created by chanaka on 10/21/15.
 */
function AccountController($scope, storyService, $location) {

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
    loadUserStory();

    /**
     * Load story data with provided story id.
     * @param storyId
     */
    $scope.loadFullStory = function (storyId) {
        console.log("Story id : " + storyId);
        $location.path('/post/' + storyId);
    };

    /**
     * Remove story from server.
     * @param storyId
     */
    $scope.viewConfirmation = function (storyId) {
        $.prompt("Are you sure you want to remove selected story ? ", {
            title: "Remove confirmation",
            buttons: {"Yes, remove": true, "No, Don't remove": false},
            submit: function (e, v, m, f) {
                console.log("Value clicked was: " + v);
                if (v == true) {
                    storyService.removeStoryService(storyId).success(function (data) {
                        console.log(data);
                        loadUserStory();
                    });
                }
            }
        });
    };

    /**
     * Creating a reusable function for getting user stories.
     */
    function loadUserStory() {
        storyService.getUserStoryWithId().success(function (data) {
            $scope.stories = data;
            console.log(data);
        });
    }

}