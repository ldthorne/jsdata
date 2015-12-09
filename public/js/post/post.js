'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('post', {
        url: '/post/:postId',
        templateUrl: 'js/post/post.html',
        controller: 'PostCtrl',
        resolve: {
            users: function(User) {
                // GET - > '/api/users'
                return User.findAll()
            },
            post: function(Post, $stateParams) {
                // GET - > '/api/users'
                return Post.find($stateParams.postId)
            }
        }
    })
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, post, $stateParams) {
    $scope.post = post;
    // console.log(post);
    // post.find($stateParams.postId)
    // 	.then(function(post){
    // 	})
    /* 1. FIND POST
    	use state params to retrieve the post id and attach post object to scope 
    	on controller load 
    */
    $scope.deletePost = function() {
    	console.log(post)
        post.destroy(post)
            .then(function(post) {
                console.log(post)
            })
    }
        /*
        	2. DELETE POST 
        	create a function that destroys the post, adds an alert that the post has been 
        	successfully deleted, and redirects to the main state. 
        */

    /*
    	3. EDIT POST 
    	create a function that edits the post, adds an alert that the post has been 
    	successfully edited, and displays the edited post.  

    */

})
