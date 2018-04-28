const imageActivators = document.getElementsByClassName('image-modal')
const infoActivators = document.getElementsByClassName('info-modal')
let modalTeplate = document.createElement('div')
let imageElToChange
modalTeplate.classList.add('modal')
if (imageActivators.length) {
    let secondaryImages = ''
    for (const activator of imageActivators) {
        let src = activator.src ? activator.src : activator.querySelector('img').src
        secondaryImages += `<div class="image-content"><img src="${src}"></div>`
        activator.addEventListener('click', (e) => {
            alert('click en image')
        })
    }
    modalTeplate.innerHTML = ` 
        <a class="close"><i class="fas fa-times"></i></a>
        <div class="content">
            <img class="principal" src="" alt="">
        </div>
        <div class="others">
            ${secondaryImages}
        </div>`
    document.querySelector('body').appendChild(modalTeplate)
    imageElToChange = modalTeplate.querySelector('img.principal')
    console.log(imageElToChange)
    const thumbsActivators = modalTeplate.getElementsByClassName('image-content')
    for (const activator of thumbsActivators) {
        activator.addEventListener('click', (e) => {
            imageElToChange.src = activator.querySelector('img').src
        })
    }
}
if (infoActivators.length) {
}