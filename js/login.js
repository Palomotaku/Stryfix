const Username = document.getElementById('Username')
const Password = document.getElementById('Password')
const butlog = document.getElementById('input')

butlog.addEventListener('click', (e) => {
    e.preventDefault()
    const data ={
        Username: Username.value,
        Password: Password.value
    }
    console.log(data)
})

