window.addEventListener('scroll', () => {
  if(window.scrollY > 200) document.querySelector('.go-up').style.transform = 'scale(1)'
  else document.querySelector('.go-up').style.transform = 'scale(0)'
})
Vue.component('movie', {
  props: ['imgurl', 'overview', 'title'],
  template: `<div class="movie">
  <img :src=imgurl>
  <div class="mask">
      <p>{{overview}}...</p>
      <div class="actions">
          <h3>{{title}}</h3>
          <a @click="$emit('open')" class="btn">Ver Más</a>
      </div>
  </div>
</div>`
})
var app = new Vue({
    el: '#app',
    data: {
      movies: [],
      movie: null,
      baseIMG: 'https://image.tmdb.org/t/p/w500',
      baseTrailer: 'https://www.youtube.com/embed'
    },
    methods: {
      async search () {
        if(this.movie) {
          let search = this.movie.toLowerCase()
          search = search.split(' ').join('+')
          try {
            const API_KEY = '5145398a1f237d870d5d1de9074e1220'
            let res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&language=es`)
            res = await res.json()
            if(res.results.length) {
             this.movies = res.results
             .filter(el => {
              return el.poster_path && el.overview
             })
             .map(el => {
                el.sumarizedOverview = el.overview.length < 140 ? el.overview : el.overview.slice(0,140)
                return el
             })
            } else alert('no se encontroó ninguna película')
          } catch (error) {
            console.error(error)
          }
          setTimeout(() => {
            const top = this.$refs.movieSection.offsetTop
            window.scroll({
              left:0,
              top,
              behavior: 'smooth'
            })
          },10)
        } else alert('debes buscar algo')
      },
      goUp () {
        window.scroll({
          left:0,
          top: 0,
          behavior: 'smooth'
        })
      },
      openModal(data) {
        console.log(data)
      }
    }
  })