import { createStatsString } from './utils.js';


const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

const catchphrases = [];

headDropdown.addEventListener('change', () => {
    const value = headDropdown.value;
    
    headCount++;
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;

    middleCount++;
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;

    bottomCount++;
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    
    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);
    displayCatchphrases();
    catchphraseInput.value = '';
});

function displayStats() {
    const statsString = createStatsString(headCount, middleCount, bottomCount);
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.classList.add('catchphrase');
        p.textContent = catchphrase;

        catchphrasesEl.append(p);
    }
}

