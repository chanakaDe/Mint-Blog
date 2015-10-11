/**
 * Created by chanaka on 9/3/15.
 */
function DashController($scope, storyService) {

    $scope.message = '';
    $scope.stories = [];

    /**
     * Setting the image slider on dash screen.
     */
    $(document).ready(function () {

        //Homepage Slider
        var options = {
            nextButton: false,
            prevButton: false,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true
        };
        var mySequence = $("#sequence").sequence(options).data("sequence");
        //Main menu Initialization
    });

    /**
     * Get all saved stories from the server.
     */
    storyService.getStories().success(function (data) {
        $scope.stories = data;
        console.log(data);
    });
}