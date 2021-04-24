//Creating the vue.js app with data inside
const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
    }
})

//Mounting vue to the id tag 'app'
app.mount('#app')