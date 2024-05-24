const myForm = document.getElementById('form')
const myPassword = document.getElementById('password')
const myConfirmPassword = document.getElementById('confirmPassword')
const hesitate = document.getElementById('hesitate')

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let isPasswordMatched = false;

    if(e.target[0].value.length < 5){
        console.log('username must be more than 10 characters')
    }else{
        e.target[0].value
    }


    const data = {
        fullname : e.target[0].value,
        mobile : e.target[1].value,
        email : e.target[2].value,
        url : e.target[3].value,
        password : e.target[4].value,
        confirmPassword : e.target[5].value
    }




    localStorage.setItem('fullName',data.fullname)
    localStorage.setItem('mobile',data.mobile)
    localStorage.setItem('email',data.email)
    localStorage.setItem('url',data.url)
    localStorage.setItem('password',data.password)
    console.log(data);
    hesitate.style.color = "white"

    if(myPassword.value == myConfirmPassword.value){
        isPasswordMatched = true;
        hesitate.innerText = 'Passwords Match'
    }else{
        isPasswordMatched = false
        hesitate.innerText = 'Passwords does not Match'
    }
})
