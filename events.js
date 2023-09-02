const clickButtonEl = document.getElementById('click-button');
const clickOutputEl = document.getElementById('click-output');

clickButtonEl.addEventListener('click', () => {
    clickOutputEl.textContent = 'Button clicked!';
});

const hoverOutputEl = document.getElementById('hover-output');
const hoverDivEl = document.getElementById('hover-div');

hoverDivEl.addEventListener('mouseover', () => {
    hoverOutputEl.textContent = 'Mouse over the div!';
});

hoverDivEl.addEventListener('mouseout', () => {
    hoverOutputEl.textContent = 'Mouse left the div!';
});

const keypressOutput = document.getElementById('keypress-output'); 

document.addEventListener('keydown', (event) => {
    keypressOutput.textContent = `Key pressed: ${event.key}`;
});

const submitForm = document.getElementById('submit-form');
const submitOutput = document.getElementById('submit-output');

submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    submitOutput.textContent = `Hello, ${nameInput.value}! Form submitted.`;
    nameInput.value = '';
});