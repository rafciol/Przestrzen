const header = document.querySelector('.sector-studio-header');
const sygnet = document.getElementById('sygnet');
const links = document.querySelectorAll('#sector-studio-links a');

function checkHeaderPosition() {
    let scrollY = window.scrollY;

    if (scrollY === 0) {
        header.style.background = 'transparent';
        header.style.mixBlendMode = 'normal';
    } else {
        header.style.backgroundColor = '#e1e1e1';
        header.style.mixBlendMode = 'difference';
    }
}

window.addEventListener('load', checkHeaderPosition);
window.addEventListener('scroll', checkHeaderPosition);