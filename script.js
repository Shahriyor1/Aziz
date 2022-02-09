const face = document.querySelector('.face');
const hands = document.querySelectorAll('.hand');
const tongue = document.querySelector('.tongue');

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const showBtn = document.querySelector('.password-button');



/////////username


username.addEventListener('input' , rotateFace)
username.addEventListener('focus' , rotateFace)
username.addEventListener('blur' , ()=>{
    face.style.transform = `rotate(0deg)`
})

//////password

password.addEventListener('focus' , () =>{
    hands.forEach((hand) => {
        hand.classList.add('hide');
        tongue.classList.remove('breath');
    })
})


password.addEventListener('blur' , () =>{
    hands.forEach((hand) => {
        hand.classList.remove('hide');
        tongue.classList.add('breath');
    })
})


///////////////showBtn

showBtn.addEventListener('mousedown' , () =>{
    password.type = 'text'
    hands.forEach(hand =>{
        hand.classList.add('peek')
    })
})

showBtn.addEventListener('mouseup' , () =>{
    password.type = 'password'
    hands.forEach(hand =>{
        hand.classList.remove('peek')
        hand.classList.add('hide')
    })
    password.focus()
})


//////////////FUNCTION

function rotateFace() {
    const usernameLength = username.value.length

    if(usernameLength > 40) {
        returen
    }
    // console.log(usernameLength);
    face.style.transform = `rotate(${20-usernameLength}deg)`

}


