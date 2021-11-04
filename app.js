const nameInput = document.getElementById('name-input');
const buttonClick = document.getElementById('click-me');
const newName = document.getElementById('name-display');

buttonClick.addEventListener('click', () => {
    const displayName = nameInput.value;
    newName.textContent = displayName;

});
