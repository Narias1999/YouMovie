const imageActivators = document.getElementsByClassName('image-modal')
const infoActivators = document.getElementsByClassName('info-modal')
let modalTeplate = document.createElement('div')
let imageElToChange
const movieTitle = document.querySelector('h1').getAttribute('universe')
modalTeplate.classList.add('modal')
if (imageActivators.length) {
    let secondaryImages = ''
    for (const activator of imageActivators) {
        let src = activator.src ? activator.src : activator.querySelector('img').src
        secondaryImages += `<div class="image-content"><img src="${src}"></div>`
        activator.addEventListener('click', (e) => {
            modalTeplate.style.display = 'flex'
            imageElToChange.src = activator.src ? activator.src : activator.querySelector('img').src
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
    document.querySelector('.close').addEventListener('click', () => {
        modalTeplate.style.display = 'none'
    })
    const thumbsActivators = modalTeplate.getElementsByClassName('image-content')
    for (const activator of thumbsActivators) {
        activator.addEventListener('click', (e) => {
            imageElToChange.src = activator.querySelector('img').src
        })
    }
}
if (infoActivators.length) {
    const actorsData = {
        ScarlettJohansson: {
            height: '1.60 m.',
            age: '33 años.',
            bornCity: 'Nueva York.',
            nacionality: 'usa',
            image: 'ScarlettJohansson.jpg',
            movies: {
                MCU: {
                    character: 'Natasha Romanoff (La viuda negra).',
                    description: 'Viuda Negra, cuyo nombre real es Natalia Alianovna Romanova, mejor conocida como Natasha Romanoff es una superheroína ficticia que pertenece a Marvel Comics. Dentro del Universo Marvel hay varias viudas negras, todas ellas pertenecen o han pertenecido a una organización espía rusa. La más importante es Natasha Romanoff, que ya abandonó el grupo, para ejercer de agente de inteligencia y espionaje en organizaciones como S.H.I.E.L.D. y convertirse en una de las superheroínas más letales, al formar miembro del equipo de superhéroes, Los Vengadores.'
                }
            }
        },
        RobertDowneyJr: {
            height: '1.74 m.',
            age: '53 años.',
            bornCity: 'Manhattan, Nueva York.',
            nacionality: 'usa',
            image: 'RobertDowney.jpg',
            movies: {
                MCU: {
                    character: 'Iron Man (Tony Stark).',
                    description: 'Anthony Edward "Tony" Stark es un multimillonario industrial e inventor. Él dirige Industrias Stark, originalmente iniciada por su padre, Howard Stark. Tony crea una armadura para convertirse en el invencible superhéroe Iron Man.<br>Stark sigue siendo humano, con la excepción de su Reactor Ark en su pecho. Uno de los hombres más poderosos, ricos, e inteligentes del UniSi bien hay varios elementos a lo que todavía lo hacen humano,verso Cinematográfico de Marvel. Sin embargo, su poder proviene de su armadura de alta tecnología, la Armadura de Iron Man, la cual le otorga una fuerza y durabilidad sobrehumanas, la habilidad de volar, y un diverso armamento.'
                }
            }
        },
        ChrisEvans: {
            height: '1.83 m.',
            age: '36 años.',
            bornCity: 'Sudbury, Massachusetts.',
            nacionality: 'usa',
            image: 'ChrisEvans.jpg',
            movies: {
                MCU: {
                    character: 'Capitan America (Steve Rogers).',
                    description: 'El Capitán Steven "Steve" Rogers fue el único sobreviviente de la exitosa prueba del Suero del Súper Soldado desarrollado por Abraham Erskine durante la Segunda Guerra Mundial. Transformado en la encarnación de la perfección fisiológica humana, el super soldado patriota recibió el título de Capitán América y luchó contra los nazis y su terrorífico grupo asociado HYDRA. Rogers estuvo congelado durante casi setenta años y despertó en el siglo XXI, donde se unió a Los Vengadores como su líder y trabaja para S.H.I.E.L.D. como un agente.<br>Rogers se encuentra en una clase única por sí mismo. El suero le ha permitido ser más que humano. En general, Rogers posee notable fuerza, velocidad, agilidad, resistencia, reflejos, durabilidad y capacidad regenerativa extraordinarias. Además, él es un agente altamente capacitado, entrenado en varias formas de combate cuerpo a cuerpo, armas y otras habilidades debido a su experiencia durante la Segunda Guerra Mundial que aún en estos tiempos lo hace eficaz en la batalla. A pesar de sus constantes vitales se desaceleró, la vejez y el haber sido congelado durante casi setenta años, todavía está en excelentes condiciones físicas.'
                }
            }
        }
    }
    const modalActorsTemplate = document.createElement('div')
    modalActorsTemplate.className = 'modal actors'
    modalActorsTemplate.innerHTML = `<div class="content">
        <img id="character" src="">
        <div class="description">
            <h2><span id="name">Scarlett Johansson</span> <img class="nacionality"></h2>
            <h3></h3>
            <br>
            <p><strong>Altura: </strong><span id="height"></span></p>
            <p><strong>Edad: </strong><span id="age"></span></p>
            <p><strong>Lugar de Nacimiento: </strong><span id="bornCity"></span></p>
        </div>
        <div class="biography">
            <h3>Personaje</h3>
            <p></p>
        </div>
    </div>`
    document.querySelector('body').appendChild(modalActorsTemplate)
    modalActorsTemplate.addEventListener('click', e => {
        modalActorsTemplate.style.display = 'none'
    })
    for (const activator of infoActivators)
    activator.addEventListener('click', e => {
        const name = activator.title
        const characterData = actorsData[name.split(' ').join('')]
        const movieData = characterData.movies[movieTitle.split(' ').join('')]
        modalActorsTemplate.querySelector('#name').innerHTML = name
        modalActorsTemplate.querySelector('#character').src = `../../assets/img/actors/${characterData.image}`
        modalActorsTemplate.querySelector('.nacionality').src = `../../assets/img/nacionalities/${characterData.nacionality}.png`
        modalActorsTemplate.querySelector('#height').innerHTML = characterData.height
        modalActorsTemplate.querySelector('#age').innerHTML = characterData.age
        modalActorsTemplate.querySelector('#bornCity').innerHTML = characterData.bornCity
        modalActorsTemplate.querySelector('.description h3').innerHTML = movieData.character
        modalActorsTemplate.querySelector('.biography p').innerHTML = movieData.description
        modalActorsTemplate.style.display = 'flex'
    })
}