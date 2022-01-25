function loadWatchedButton(mediaId){
    const watchedButton = document.getElementById('watched-button');
    watchedButton.style.display = 'none';
    fetch(`http://localhost:9090/watch/user/1/media/${mediaId}`)
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

function handleWatchButton(mediaId){
    if(document.getElementById('watched-button').innerText == "Adicionar como assistido"){
        watchMedia(1, mediaId);
    }
    else{
        unwatchMedia(1, mediaId);
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
