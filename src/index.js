import Vue from 'vue'
import App from './App.vue'

class Util {
    static id = Date.now()
}

console.log(Util.id)

new Vue({
    el: '#app',
    render: h => h(App)
})