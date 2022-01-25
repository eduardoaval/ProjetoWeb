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