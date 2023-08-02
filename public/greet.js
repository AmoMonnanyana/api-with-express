document.addEventListener('alpine:init', () => {
    Alpine.data('greetApi', function() {
      return {
        username: '',
        language: '',
        greetings: '...waiting for inputs',
        used: '',

        greet(){
        axios.get(`/api/greet?username=${this.username}&language=${this.language}`)
        .then(result =>{
            this.greetings = result.data.message
            this.used = result.data.greeting
        })
    }
      }
    })
})
document.addEventListener('alpine:init', () => {
  Alpine.data('greetApi', function() {
    return {
      
    }
  })
})