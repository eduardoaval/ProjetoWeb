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

function onSignupButtonPress()
{
    const nickName = document.getElementById('nickName').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:9090/users', { method: 'POST', body: JSON.stringify({ nickName, name, surname, email, password}),
    headers: {'Content-Type': 'application/json'}})
    .then(response => {
        response.json()
        .then(json => {
            if(!!json.error)
            {
                document.getElementById('error-message').innerText = json.error;
            }
            else
            {
                location.href = location.origin + '/login';
            }
        })
        .catch(err => {
            location.href = location.origin + '/login';
        })
    })
}