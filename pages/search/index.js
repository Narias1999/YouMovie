var app = new Vue({
    el: '#app',
    data: {
      movie: null
    },
    methods: {
      async search () {
        if(this.movie) {
          let search = this.movie.toLowerCase()
          search = search.split(' ').join('+')
          try {
            let res = await fetch(`https://itunes.apple.com/search?term=${search}&media=movie&entity=movie`)
            res = await res.json()
            console.log(res)
          } catch (error) {
            console.error(error)
          }
        } else alert('debes buscar algo')
      }
    }
  })