const Username = document.getElementById('Username')
const Password = document.getElementById('Password')
const butlog = document.getElementById('butlog')

butlog.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        Username: Username.value,
        Password: Password.value
    }
    window.location.href = "https://palomotaku.github.io/Stryfix/inicial.html";
    console.log(data)
})

