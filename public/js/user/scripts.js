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
