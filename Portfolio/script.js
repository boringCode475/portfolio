const toggleOpen = document.querySelector('.toggleOpen')
const menu = document.querySelector('#nav-items')

const openMenu = () => {
    menu.classList.toggle('nav-items-open')
    toggleOpen.classList.toggle('is-active')
}

toggleOpen.addEventListener('click', openMenu)

