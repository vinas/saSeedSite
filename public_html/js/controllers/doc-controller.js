app.controller('docController', docController);

function docController($scope, $routeParams, $sce, PostService, PostFactory) {
    
    $scope.post = {};

    $scope.getPost = getPost;
    $scope.searchForPosts = searchForPosts;
    $scope.hideResults = hideResults;
    $scope.checkSubmit = checkSubmit;

    init();

    function init()
    {
        $scope.titleList = [];
        $scope.searched = '';
        getPost(($routeParams.id) ? $routeParams.id : 1);
    }

    function getPost(id)
    {
        PostFactory.get(id).then(function(res) {
            $scope.hideResults();
            $scope.post = res.data;
            $scope.post.content = $sce.trustAsHtml($scope.post.content);
        });
    }

    function searchForPosts(q)
    {
        $scope.hideResults();
        PostService.getTitleList(q).then(function(res) {
            $scope.searched = q;
            $scope.titleList = res.data;
            $('#searchResult').show(showTime);
        });
    }

    function hideResults()
    {
        $('#searchResult').hide(hideTime);
    }

    function checkSubmit(keyEvent)
    {
        if (keyEvent.which === 13)
            $scope.searchForPosts($scope.q);
    }

}