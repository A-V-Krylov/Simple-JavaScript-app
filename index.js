const listHomes = document.querySelector('.list-homes');
const inputForm = document.querySelector('.input-form');
const buttonSave = document.querySelector('.button-save');

inputForm.value = listHomes.value;

buttonSave.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputForm.value.trim().length > 0) {
        document.getElementById(listHomes.selectedIndex).textContent = inputForm.value.trim();
        inputForm.value = inputForm.value.trim();
    }
    else {
        inputForm.classList.add('is-invalid');
        buttonSave.classList.add('is-invalid');
    }
});

listHomes.addEventListener('change', function () {
    if (inputForm.classList[2] == 'is-invalid') {
        inputForm.classList.remove('is-invalid');
        buttonSave.classList.remove('is-invalid');
    }
    inputForm.value = listHomes.value;
});

inputForm.addEventListener('input', function (event) {
    if (event.target.value.trim() !== "") {
        inputForm.classList.remove('is-invalid');
        buttonSave.classList.remove('is-invalid');
    }
});


