/**
 * Created by chanaka on 7/17/14.
 */

var mainHost = "http://localhost:3000/api";

var debug = true;

var host = {
    post: mainHost + '/post',
    login: mainHost + '/login',
    signup: mainHost + '/signup',
    users: mainHost + '/users',
    story: mainHost + '/story',
    stories: mainHost + '/stories',
    me: mainHost + '/me',
    story_of_user: mainHost + '/story_of_user',
    remove_story: mainHost + '/remove_story',
    update_story: mainHost + '/update_story',
    search_story: mainHost + '/search_story',
    search_story_by_category: mainHost + '/search_story_by_category'
};

//$scope.showPrimaryMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_PRIMARY,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        title: 'Primary Notification',
//        message: 'This is a primary notification'
//    });
//};
//
//$scope.showSuccessMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_SUCCESS,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        title: 'Success Notification',
//        message: 'This is a success notification'
//    });
//};
//
//$scope.showDangerMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_DANGER,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        animate: false,
//        title: 'Danger Notification',
//        message: 'This is a danger notification'
//    });
//};
//
//$scope.showWarningMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_WARNING,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        size: BootstrapDialog.SIZE_SMALL,
//        title: 'Warning Notification',
//        message: 'This is a warning notification'
//    });
//};
//
//$scope.showInfoMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_INFO,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        title: 'Info Notification',
//        message: 'This is a info notification'
//    });
//};
//
//$scope.showDefaultMessage = function () {
//    BootstrapDialog.show({
//        type: BootstrapDialog.TYPE_DEFAULT,
//        closable: true,
//        closeByBackdrop: false,
//        closeByKeyboard: false,
//        title: 'Default Notification',
//        message: 'This is a default notification'
//    });
//};