function loadReviewCount(userId){
    fetch(`http://localhost:9090/review/user/${userId}`)
    .then(async (response)=>{
        response.json().then((reviews)=>{
            const reviewCount = document.getElementById('review-count')
            reviewCount.innerHTML = `Reviews: ${reviews.length}`;
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadWatchedCount(userId){
    fetch(`http://localhost:9090/watch/user/${userId}`)
    .then(async (response)=>{
        response.json().then((movies)=>{
            const moviesCount = document.getElementById('movies-count')
            moviesCount.innerHTML = `Filmes: ${movies.length}`;
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadFollowedsCount(userId){
    fetch(`http://localhost:9090/followeds/${userId}`)
    .then(async (response)=>{
        response.json().then((movies)=>{
            const moviesCount = document.getElementById('followeds-count')
            moviesCount.innerHTML = `Seguindo: ${movies.length}`;
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadFollowersCount(userId){
    fetch(`http://localhost:9090/followers/${userId}`)
    .then(async (response)=>{
        response.json().then((movies)=>{
            const moviesCount = document.getElementById('followers-count')
            moviesCount.innerHTML = `Seguidores: ${movies.length}`;
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadFollowButton(followedId){
    const followButton = document.getElementById('follow-button');
    followButton.style.display = 'none';
    if(followedId == 1){
        return;
    }
    fetch(`http://localhost:9090/follower/1/follow/${followedId}`)
    .then(async (response)=>{
        response.json().then(()=>{
            if(response.status == 200)
            {
                followButton.style.display = '';
                followButton.innerText = "Deixar de seguir";
            }
            else
            {
                followButton.style.display = '';
                followButton.innerText = "Seguir";
            }
        })
    })
    .catch((err)=>{
        followButton.style.display = '';
        followButton.innerText = "Seguir";
    })
}

function handleFollowButton(followedId){
    if(document.getElementById('follow-button').innerText == "Seguir"){
        follow(1, followedId);
    }
    else{
        unfollow(1, followedId);
    }
}

function follow(userId, followedId){
    const followButton = document.getElementById('follow-button');
    followButton.style.display = 'none';
    fetch(`http://localhost:9090/follower/${userId}/follow/${followedId}`, { method: 'POST'})
    .then(async (response)=>{
        response.json().then(()=>{
            followButton.style.display = '';
            followButton.innerText = "Deixar de seguir";
        })
    })
    .catch((err)=>{
        followButton.style.display = '';
        followButton.innerText = "Seguir";
    })
}

function unfollow(userId, followedId){
    const followButton = document.getElementById('follow-button');
    followButton.style.display = 'none';
    fetch(`http://localhost:9090/follower/${userId}/follow/${followedId}`, { method: 'DELETE' })
    .then(async (response)=>{
        response.json().then(()=>{
            followButton.style.display = '';
            followButton.innerText = "Seguir";
        })
    })
    .catch((err)=>{
        followButton.style.display = '';
        followButton.innerText = "Deixar de seguir";
    })
}
