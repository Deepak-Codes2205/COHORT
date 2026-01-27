
const reels = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "./reels/video3.mp4",
        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];
var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''
  reels.forEach(function (elem,idx) {
      sum = sum + `<div class="reel">
            <video id=${idx} autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                  alt="">
                <h4>${elem.username}</h4>
                
                <button id=${idx} class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div id=${idx} class="like">
                <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`
  })
  allReels.innerHTML = sum
}
addData();

allReels.addEventListener('click',function(dets){
  if(dets.target.className == 'like')
  {
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
      console.log("liked")
      
    }
    else{
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
      console.log("Unliked")
    }
    addData();
  }
  if(dets.target.className == 'follow')
  {
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
      console.log("Followed")
    }
    else{
      reels[dets.target.id].isFollowed = false;
      console.log("UnFollowed")
    }
    addData();
  }

})