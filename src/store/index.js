import Vue from 'vue'
import Vuex from 'vuex'
import police from '../assets/police.jpg'
import ecilop from '../assets/ecilop.jpg'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        message: 'police',
        image: police
    },
    mutations: {
        reverseMessage: (state) => {
            state.message = state.message.split('').reverse().join('')
            state.image = state.image === police ? ecilop : police
        }
    },
    getters: {
        message: state => state.message,
        image: state => state.image
    }
})

export default store