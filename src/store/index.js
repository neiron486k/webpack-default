import Vue from 'vue'
import Vuex from 'vuex'
import header from "./modules/header";
import main from "./modules/main"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        header,
        main
    }
})