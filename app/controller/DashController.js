/**
 * Created by chanaka on 9/3/15.
 */
function DashController($scope, postService) {

    postService.getAllBookings().then(function (data) {
        console.log(data);
    });

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
}