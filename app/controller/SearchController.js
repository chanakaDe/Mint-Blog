/**
 * Created by chanaka on 11/1/15.
 */
function SearchController($scope, storyService) {

    /**
     * Get url parameter by param name.
     * @param name
     * @returns {string}
     */
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var query = getParameterByName('query');
    console.log("Query : " + query);

    /**
     * Get all saved stories from the server.
     */
    storyService.getStories().success(function (data) {
        $scope.stories = data;
        console.log(data);
    });

}