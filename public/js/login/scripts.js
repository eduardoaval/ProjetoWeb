function onLoginButtonPress()
{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', { method: 'POST', body: JSON.stringify({ email, password}),
    headers: {'Content-Type': 'application/json'}})
    .then(response => {
        response.json()
        .then(json => {
            document.getElementById('error-message').innerText = json.error;
        })
        .catch(err => {
            location.href = location.origin;
        })
    })
}