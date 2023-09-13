const Username = document.getElementById('Username')
const Password = document.getElementById('Password')
const input = document.getElementById('input')

input.addEventListener('click', (e) => {
    e.preventDefault()
    const data ={
        Username: Username.value,
        Password: Password.value
    }
    console.log(data)
})

