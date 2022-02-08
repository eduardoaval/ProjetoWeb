function loadWatchedButton(userId, mediaId){
    const watchedButton = document.getElementById('watched-button');
    watchedButton.style.display = 'none';
    fetch(`http://localhost:9090/watch/user/${userId}/media/${mediaId}`)
    .then(async (response)=>{
        response.json().then(()=>{
            if(response.status == 200)
            {
                watchedButton.style.display = '';
                watchedButton.innerText = "Remover dos assistidos";
            }
            else
            {
                watchedButton.style.display = '';
                watchedButton.innerText = "Adicionar como assistido";
            }
        })
    })
    .catch((err)=>{
        watchedButton.style.display = '';
        watchedButton.innerText = "Adicionar como assistido";
    })
}

function loadNewReview(userId, mediaId){
    const reviewCard = document.getElementById('new-review');
    reviewCard.style.display = '';
    fetch(`http://localhost:9090/review/user/${userId}/media/${mediaId}`)
    .then(async (response)=>{
        response.json().then(()=>{
            if(response.status == 200)
            {
                reviewCard.style.display = 'none';
            }
            else
            {
                reviewCard.style.display = '';
            }
        })
    })
    .catch((err)=>{
        reviewCard.style.display = '';
    })
}

function handleWatchButton(userId, mediaId){
    if(document.getElementById('watched-button').innerText == "Adicionar como assistido"){
        watchMedia(userId, mediaId);
    }
    else{
        unwatchMedia(userId, mediaId);
    }
}

function watchMedia(userId, mediaId){
    const watchedButton = document.getElementById('watched-button');
    watchedButton.style.display = 'none';
    fetch(`http://localhost:9090/watch/user/${userId}/media/${mediaId}`, { method: 'POST'})
    .then(async (response)=>{
        response.json().then(()=>{
            watchedButton.style.display = '';
            watchedButton.innerText = "Remover dos assistidos";
        })
    })
    .catch((err)=>{
        watchedButton.style.display = '';
        watchedButton.innerText = "Adicionar como assistido";
    })
}

function unwatchMedia(userId, mediaId){
    const watchedButton = document.getElementById('watched-button');
    watchedButton.style.display = 'none';
    fetch(`http://localhost:9090/watch/user/${userId}/media/${mediaId}`, { method: 'DELETE' })
    .then(async (response)=>{
        response.json().then(()=>{
            watchedButton.style.display = '';
            watchedButton.innerText = "Adicionar como assistido";
        })
    })
    .catch((err)=>{
        watchedButton.style.display = '';
        watchedButton.innerText = "Remover dos assistidos";
    })
}

function addReview(userId, mediaId){
    const reviewCard = document.getElementById('new-review');
    const description = document.getElementById('description').value;
    const score = document.getElementById('score').value;

    let body = { userId, mediaId, description, score }
    reviewCard.style.display = 'none';
    fetch(`http://localhost:9090/reviews`, { method: 'POST', body:JSON.stringify(body),
     headers: {'Content-Type': 'application/json'}})
    .then(async (response)=>{
        response.json().then(()=>{
            location.href = location.origin + '/movie/' + mediaId;
        })
    })
    .catch((err)=>{
        reviewCard.style.display = '';
    })
}
