app.controller('docController', function($scope, $routeParams, $sce, PostService, PostFactory) {
    $scope.post = {};

    $scope.getPost = function(id)
    {
        PostFactory.get(id).then(function(res) {
            $scope.hideResults();
            $scope.post = res.data;
            $scope.post.content = $sce.trustAsHtml($scope.post.content);
        });
    };

    $scope.searchForPosts = function(q)
    {
        $scope.hideResults();
        PostService.getTitleList(q).then(function(res) {
            $scope.searched = q;
            $scope.titleList = res.data;
            $('#searchResult').show(showTime);
        });
    };

    $scope.hideResults = function()
    {
        $('#searchResult').hide(hideTime);
    };

    $scope.checkSubmit = function(keyEvent)
    {
        if (keyEvent.which === 13)
            $scope.searchForPosts($scope.q);
    };

    var init = function()
    {
        $scope.titleList = [];
        $scope.searched = '';
        $scope.getPost(($routeParams.id) ? $routeParams.id : 1);
    };

    init();
});