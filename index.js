const listHomes = document.querySelector('.list-homes');
const inputForm = document.querySelector('.input-form');
const battonSave = document.querySelector('.button-save');

inputForm.value = listHomes.value;

battonSave.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputForm.value.trim() !== "") {
        document.getElementById(listHomes.selectedIndex).textContent = inputForm.value;
    }
    else {
        inputForm.classList.add('validation');
        battonSave.classList.add('validation');
    }
}); 

listHomes.addEventListener('click', function(){
    inputForm.value = listHomes.value;
});

inputForm.addEventListener('input', function(event) {
    if(event.target.value.trim() !== "") {
        inputForm.classList.remove('validation');
        battonSave.classList.remove('validation');
    }
});
