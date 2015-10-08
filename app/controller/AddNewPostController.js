/**
 * Created by chanaka on 10/5/15.
 */
function AddNewPostController($scope) {

    $scope.previewContent = function () {
        $scope.title = $scope.postTitle;
        $scope.content = $scope.postContent;
        $scope.showPreview = true;
    }

}