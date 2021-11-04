const nameInput = document.getElementById('name-input');
const buttonClick = document.getElementById('click-me');
const newName = document.getElementById('name-display');
const pinkButton = document.getElementById('pink');
const lightgreenButton = document.getElementById('lightgreen');
const lightblueButton = document.getElementById('lightblue');
const colorChange = document.getElementById('color-change')

buttonClick.addEventListener('click', () => {
    const displayName = nameInput.value;
    newName.textContent = displayName;

});

pinkButton.addEventListener('click', () => {
    colorChange.style.background = 'pink'
});
lightblueButton.addEventListener('click', () => {
    colorChange.style.background = 'lightblue'
});
lightgreenButton.addEventListener('click', () => {
    colorChange.style.background = 'lightgreen'
});
