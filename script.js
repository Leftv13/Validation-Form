const userRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,10}$/;
const passwordRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const emailRegex =       /^\S+@\S+\.\S+$/;
const phonenumberRegex = /^[0-9]{6,16}$/;

//selectores
const countries = document.querySelector(`#countries`);
const usernameInput = document.querySelector(`#username`);
const emailInput = document.querySelector(`#email`)
const phoneCode = document.querySelector(`#phonecode`)

//Validacion
let usernameValidation = false;
let emailValidation = false;


//Funcion

const validacion = (e, validacion, element) =>{
    const information =e.target.parentElement.children[1];
if (validacion) {
    element.classList.add(`correct`)
    element.classList.remove(`incorrect`)
    information.classList.remove(`show-info`)
} else {
    element.classList.add(`incorrect`)
    element.classList.remove(`correct`)
    information.classList.add(`show-info`)
}
};



[...countries].forEach(Option => {
    Option.innerHTML = Option.innerHTML.split(`(`)[0];
});

usernameInput.addEventListener(`input`, e =>{
usernameValidation = userRegex.test(e.target.value);
validacion(e, usernameValidation, usernameInput)
});
//e.target.value es lo que el usuario escribe en el input 


emailInput.addEventListener(`input`, e => {
emailValidation = emailRegex.test(e.target.value);
    validacion(e, emailValidation, emailInput)

})

countries.addEventListener(`input`, e =>{
const optionSelected = [...e.target.children].find(Option => Option.selected);
phoneCode.innerHTML = `+${optionSelected.value}`
});
