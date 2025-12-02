const menuToglle = document.querySelector('.link-menu-outline')
const dropdown = document.querySelector('.nav-dropdown');

menuToglle.addEventListener('click', () => {
    event.preventDefault()
    dropdown.style.display = 'block';
    
})

const closeOutline = document.querySelector('.close-outline')

closeOutline.addEventListener('click', () => {
    event.preventDefault()
    dropdown.style.display = 'none';
})

const dropdownItem = document.querySelector('.dropdown-item')

dropdown.addEventListener('click', () => {
    dropdown.style.display = 'none';
})

