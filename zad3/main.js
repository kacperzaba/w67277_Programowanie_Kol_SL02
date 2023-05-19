const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
})

const nameField = document.querySelector("[name='name']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 3);
});

const emailField = document.querySelector("[name='email']");
emailField.addEventListener('input', () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});

const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener('input', () => {
    requiredValidation(passwordField);
});


const confirmPasswordField = document.querySelector("[name='confirm-password']");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword();
});

function requiredValidation(field) {

    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (!field.value || field.value === '') {
        
        errorField.innerHTML = 'podaj poprawne hasło: Jedna duża litera jedna mała litera jedna cyfra';
        return true;
    }
    else {
        
        errorField.innerHTML = '';
        return false;
    }
}

function minLengthValidation(field, minLength = 0) {
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (field.value.length < minLength) {
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

function maxLengthValidation(field, maxLength = 0) {
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (field.value.length > maxLength) {
        errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

function validSexFileds() {
    let result = false;

    const errorField = document.querySelector('span.sex.error');

    sexFields.forEach(field => {
        result = field.checked || result;
    });

    errorField.innerHTML = result ? '' : 'Prosze wybrać płeć';

    return !result;
}
// do emaila
function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (!emailRegex.test(field.value)) {
        errorField.innerHTML = 'nie poprawny mail';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}
// do hasla
function passwordValidation(field) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (!passwordRegex.test(field.value)) {

        errorField.innerHTML = 'hasło musi mieć dużą, małą literę liczbę i 8 znaków';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}



function validConfirmPassword() {
    const errorField = document.querySelector(`[name='confirm-password'] + span.error`);
    if (confirmPasswordField.value !== passwordField.value) {
        errorField.innerHTML = 'hasła są rózne';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}


function validForm() {
    if (requiredValidation(nameField) || requiredValidation(surnameField) || requiredValidation(emailField)
        || requiredValidation(passwordField) || validSexFileds() || requiredValidation(phoneField) || requiredValidation(provinceField)
        || requiredValidation(birthDateField) || requiredValidation(countyField)
        || minLengthValidation(nameField, 2) || minLengthValidation(surnameField, 2) || minLengthValidation(emailField, 2)
        || minLengthValidation(passwordField, 8) || minLengthValidation(nameField, 2) || minLengthValidation(phoneField, 9)
        || maxLengthValidation(phoneField, 9) || emailValidation(emailField) || passwordValidation(passwordField) || validAge()
        || validConfirmPassword() || requiredValidation(addressField) || minLengthValidation(addressField, 3)
        || (!checkboxField.checked && (requiredValidation(contactAddressField) || minLengthValidation(contactAddressField, 3)))) {
        return false;
    }

    return true;
}

