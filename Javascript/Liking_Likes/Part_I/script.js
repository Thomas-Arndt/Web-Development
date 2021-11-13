var likes = 0;

function like(){
    likes++;
    var likeCount = document.querySelector("#like-count");
    likeCount.innerText = likes+" like(s)";
}