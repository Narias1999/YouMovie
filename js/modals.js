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
            setTimeout(() => {
                modalTeplate.style.opacity = 1            
            }, 3)
            const buttons = modalTeplate.querySelectorAll('.image-content')
            let time = 0
            for (const btn of buttons) {
                setTimeout(() => {
                    btn.style.opacity = 1
                    btn.style.transform = 'translateY(0)'
                }, time)
                time += 200
            }
            setTimeout(() => {
                imageElToChange.style.opacity = 1
                imageElToChange.style.transform = 'scale(1)'
            }, 200)
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
        setTimeout(() => {
            imageElToChange.style.opacity = 0
            imageElToChange.style.transform = 'scale(.3)'
        }, 400)
        const buttons = modalTeplate.querySelectorAll('.image-content')
        let time = 0
        for (const btn of buttons) {
            setTimeout(() => {
                btn.style.opacity = 0
                btn.style.transform = 'translateY(-40px)'
            }, time)
            time += 200
        }
        setTimeout(() => {
            modalTeplate.style.opacity = 0
        }, 1200)
        setTimeout(() => {
            modalTeplate.style.display = 'none'
        }, 1500)
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
        JoshBrolin: {
            height: '1.78 m.',
            age: '50 años.',
            bornCity: 'Santa Mónica, California.',
            nacionality: 'usa',
            image: 'JoshBrolin.jpg',
            movies: {
                MCU: {
                    character: 'Thanos.',
                    description: 'Thanos, también conocido como Señor Oscuro por sus más fieles subordinados y apodado como Titán Loco por las comunidades galácticas, es un guerrero poderoso que gobierna sobre una lejana región del espacio y comanda un ejército masivo conocido como los Chitauri. Su objetivo principal es la obtención de las Gemas del Infinito, y su deseo de lograr este objetivo le llevó a forjar acuerdos con los villanos Loki y Ronan en sus respectivas campañas contra la Tierra y Xandar. Ambas alianzas le costaron a Thanos gran parte de sus recursos como la pérdida de una gema, El Otro, la lealtad de sus dos hijas, Gamora y Nebula, e inadvertidamente dio lugar a la formación de grupos conocidos como los Vengadores y los Guardianes de la Galaxia. Finalmente, perdió la paciencia con sus siervos, y optó por buscar las gemas personalmente.'
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
                    description: 'El Capitán Rogers fue el único sobreviviente de la prueba del Suero del Súper Soldado desarrollado por Abraham Erskine. Transformado en la encarnación de la perfección fisiológica humana, el super soldado patriota recibió el título de Capitán América y luchó contra HYDRA. Rogers estuvo congelado durante casi setenta años y despertó en el siglo XXI, donde se unió a Los Vengadores.<br>El suero le ha permitido ser más que humano. En general, Rogers posee notable fuerza, velocidad, agilidad, resistencia, reflejos, durabilidad y capacidad regenerativa extraordinarias. Además, él es un agente altamente capacitado, entrenado en varias formas de combate cuerpo a cuerpo, armas y otras habilidades debido a su experiencia durante la Segunda Guerra Mundial que aún en estos tiempos lo hace eficaz en la batalla.'
                }
            }
        },
        ChrisPratt: {
            height: '1.88 m.',
            age: '38 años.',
            bornCity: 'Virginia, Minnesota.',
            nacionality: 'usa',
            image: 'ChrisPratt.jpg',
            movies: {
                MCU: {
                    character: 'Star Lord (Peter Quill).',
                    description: 'Star Lord (Peter Quill) es un personaje ficticio, un superhéroe que aparece en los cómics publicados por Marvel Comics. Creado por Steve Englehart y Steve Gan, el personaje apareció por primera vez en Marvel Preview #4 (Enero de 1976). Siendo el hijo de una humana, Meredtih Quill, y un spartoi, J´son, Quill asume el manto de Star-Lord, un policía interplanetario. Sin embargo, con el paso de los años han hecho nuevas versiones de sus orígenes.'
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
        modalActorsTemplate.style.opacity = 0
        setTimeout(() => {
            modalActorsTemplate.style.display = 'none'
        }, 400)
    })
    for (const activator of infoActivators)
    activator.addEventListener('click', e => {
        const name = activator.querySelector('span').innerHTML
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
        setTimeout(() => {
            modalActorsTemplate.style.opacity = 1
        }, 1)
    })
}