const eye = document.querySelector('.img-eye');
const password = document.querySelector('.password');
const divEye = document.querySelector('.eye');


password.oninput = () => {
    let showEye = (password.value === '');
    if (!showEye) {
        divEye.style.display = 'block';
    } else {
        divEye.style.display = 'none';
    }

}

eye.onclick = () => {
    if(password.type === 'password') {
        password.type = 'text';
        eye.src = "./images/open-eye.svg";
    } else {
        password.type = 'password';
        eye.src = "./images/closed-eye.svg";
    }
}
