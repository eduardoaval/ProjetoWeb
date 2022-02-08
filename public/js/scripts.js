window.onload = function() {
    const form = document.getElementById('search-form');
    form.addEventListener('submit', submitted);
};

function onMoviePress(id){
    location.href = location.origin + '/movie/' + id;
}

function onLoginPress(){
    location.href = location.origin + '/login';
}


function onLogoutPress(){
    fetch('/logout')
    .then(res=> {
        location.href = location.origin;
    })
}

function onUserPress(id){
    location.href = location.origin + '/user/' + id;
}

function onHomePress(){
    location.href = location.origin + '/';
}

function onListMoviesPress(){
    location.href = location.origin + '/movies';
}

function submitted(event) {
  event.preventDefault();
  let query = document.getElementById('search-input');
  location.href = location.origin + '/movies/' + query.value;
}