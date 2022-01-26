var likedClass = 'likedHeart-button';
var dislikeClass = 'heart-button';

function loadLikedButton(reviewId){
    const likeButton = document.getElementById(`like-button-${reviewId}`);
    likeButton.style.display = 'none';
    fetch(`http://localhost:9090/like/user/1/review/${reviewId}`)
    .then(async (response)=>{
        response.json().then(()=>{
            if(response.status == 200)
            {
                likeButton.style.display = '';
                likeButton.classList.remove(dislikeClass);
                likeButton.classList.add(likedClass);
                likeButton.checked = true;
            }
            else
            {
                likeButton.style.display = '';
                likeButton.classList.remove(likedClass);
                likeButton.classList.add(dislikeClass);
                likeButton.checked = false;
            }
        })
    })
    .catch((err)=>{
        likeButton.style.display = '';
        likeButton.classList.remove(likedClass);
        likeButton.classList.add(dislikeClass);
        likeButton.checked = false;
    })
}

function handleLikeButton(reviewId){
    const likeButton = document.getElementById(`like-button-${reviewId}`);
    if(!likeButton.checked){
        likeReview(1, reviewId);
    }
    else{
        dislike(1, reviewId);
    }
}

function likeReview(userId, reviewId){
    const likeButton = document.getElementById(`like-button-${reviewId}`);
    likeButton.style.display = 'none';
    fetch(`http://localhost:9090/like/user/${userId}/review/${reviewId}`, { method: 'POST'})
    .then(async (response)=>{
        response.json().then(()=>{
            likeButton.style.display = '';
            likeButton.classList.remove(dislikeClass);
            likeButton.classList.add(likedClass);
            likeButton.checked = true;
            updateLikeCount(reviewId);
        })
    })
    .catch((err)=>{
        likeButton.style.display = '';
        likeButton.classList.remove(likedClass);
        likeButton.classList.add(dislikeClass);
        likeButton.checked = false;
    })
}

function dislike(userId, reviewId){
    const likeButton = document.getElementById(`like-button-${reviewId}`);
    likeButton.style.display = 'none';
    fetch(`http://localhost:9090/like/user/${userId}/review/${reviewId}`, { method: 'DELETE' })
    .then(async (response)=>{
        response.json().then(()=>{
            likeButton.style.display = '';
            likeButton.classList.remove(likedClass);
            likeButton.classList.add(dislikeClass);
            likeButton.checked = false;
            updateLikeCount(reviewId);
        })
    })
    .catch((err)=>{
        likeButton.style.display = '';
        likeButton.classList.remove(dislikeClass);
        likeButton.classList.add(likedClass);
        likeButton.checked = true;
    })
}

function updateLikeCount(reviewId){
    const likeButton = document.getElementById(`like-button-${reviewId}`);
    const likeCountText = document.getElementById(`like-count-${reviewId}`);
    let likeCount = Number(likeCountText.innerText[0]); 
    if(likeButton.checked){
        likeCount++;
        likeCountText.innerText = `${likeCount} likes`;
    }
    else{
        likeCount--;
        likeCountText.innerText = `${likeCount} likes`;
    }
}
