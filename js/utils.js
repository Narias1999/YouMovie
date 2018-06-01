// Show social media

const mediaEl = document.querySelector('.social-media')
window.addEventListener('scroll', e => {
    const home = document.querySelector('section').offsetHeight
    const body = document.querySelector('body').offsetHeight
    console.log(body, home, scrollY)
    if((window.scrollY > home - 300) && (window.scrollY < body - 700)) {
        mediaEl.style.left = '0px'
    } else mediaEl.style.left = '-80px'
})