const userRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const passwordRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const emailRegex =       /^\S+@\S+\.\S+$/;
const phonenumberRegex = /^[0-9]{6,16}$/;

//selectores
const countries = document.querySelector(`#countries`);
const usernameInput = document.querySelector(`#username`);
const emailInput = document.querySelector(`#email`);
const phoneCode = document.querySelector(`#phonecode`);
const phoneInput = document.querySelector(`#phone`)
const passwordInput = document.querySelector(`#password`)
const confirmPasswordInput = document.querySelector(`#confirm-password`)
const formBtn = document.querySelector(`#form-btn`)
const form = document.querySelector(`#form`)



//Validacion
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;



//Funcion
//los parametros son lo que va a ser utilizado dentro de la funcion
//los argumentos son lo que podemos cambiar luego de llamar la funcion, ej los parametros son 1+3 en una 
//funcion, y yo al llamarla puedo cambiar esos parametros ej: 3+3. Esto es el argumento

const validacion = (e, validacion, element) =>{
    //e = evento
    
    const information =e.target.parentElement.children[1];
    //Si se cumple la validacion, se agrega la clase correct, se remueve la clase incorrect y la de informacion
    formBtn.disabled =!usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation||!countriesValidation ? true : false;
    // si uno de estos no cumple las condiciones, es decir no es verdadero entonces el boton queda disabled.
if (validacion) {
    element.classList.add(`correct`);
    element.classList.remove(`incorrect`);
    information.classList.remove(`show-info`);
} else {
    element.classList.add(`incorrect`);
    element.classList.remove(`correct`);
    information.classList.add(`show-info`);
    //si no se cumple la validacion, se anade la clase incorrect y la informacion y se remueve la clase de correct
}
};

//convirtiendo el listado de countries en un array

[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split(`(`)[0];
    //el .split separa el contenido en un punto determinado, en este caso es cuando empieza el parentesis
});

usernameInput.addEventListener(`input`, e =>{
usernameValidation = userRegex.test(e.target.value);

validacion(e, usernameValidation, usernameInput);
});
//e.target.value es lo que el usuario escribe en el input 


emailInput.addEventListener(`input`, e => {
emailValidation = emailRegex.test(e.target.value);
    validacion(e, emailValidation, emailInput);

});

countries.addEventListener(`input`, e =>{
const optionSelected = [...e.target.children].find(Option => Option.selected);
phoneCode.innerHTML = `+${optionSelected.value}`;
countriesValidation = optionSelected.value === `` ? false : true;
countries.classList.add(`correct`)
phoneCode.classList.add(`correct`)
validacion(e, null,null)

});

// if = ? | : = else | || = or

phoneInput.addEventListener(`input`, e => {
    phoneValidation= phonenumberRegex.test(e.target.value);
    const information =e.target.parentElement.parentElement.children[1];
   
    if (phoneValidation) {
        phoneInput.classList.add(`correct`);
        phoneInput.classList.remove(`incorrect`);
        information.classList.remove(`show-info`);
    } else {
        phoneInput.classList.add(`incorrect`);
        phoneInput.classList.remove(`correct`);
        information.classList.add(`show-info`);
       
    }
    });
    
    
    passwordInput.addEventListener(`input`, e => {
        passwordValidation = passwordRegex.test(e.target.value);
            validacion(e, passwordValidation, passwordInput);
        
        })

        confirmPasswordInput.addEventListener(`input`, e => {
            confirmPasswordValidation = passwordInput.value === e.target.value;
                validacion(e, confirmPasswordValidation, confirmPasswordInput);
            
            })

            form.addEventListener(`submit`, e =>{
                e.preventDefault()
                // esto es para que la pagina no vuelva a cargar
                const user ={
                    username : usernameInput.value,
                    email : emailInput.value,
                    phone : `${phoneCode.innerHTML} ${phoneInput.value}`,
                    password : passwordInput.value
                }
                console.log(user)
                //esto es para que se muestre en la consola
            })