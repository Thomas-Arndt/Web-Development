function like(postId){
        var selector = "#like-count-"+postId;
        var likeCount = document.querySelector(selector);
        likeCount.innerText++;
}