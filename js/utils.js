// Show social media

const mediaEl = document.querySelector('.social-media')
window.addEventListener('scroll', e => {
    const home = document.querySelector('section')
    if(window.scrollY > home.offsetHeight - 140) {
        mediaEl.style.left = '0px'
    } else mediaEl.style.left = '-80px'
})