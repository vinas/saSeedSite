app.controller('installController', function($scope, $routeParams, $sce, PostFactory) {

    $scope.getPost = function(id)
    {
        PostFactory.get(id).then(function(res) {
            $scope.post = res.data;
            $scope.post.content = $sce.trustAsHtml($scope.post.content);
        });
    };

    var init = function()
    {
        $scope.getPost(($routeParams.id) ? $routeParams.id : 117); // fixed id
    };

    init();
});