import police from "../../assets/police.jpg";
import ecilop from "../../assets/ecilop.jpg";

export default {
    namespaced: true,
    state: {
        message: 'police',
        image: police,
        title: 'example title'
    },
    mutations: {
        reverseMessage: (state) => {
            state.message = state.message.split('').reverse().join('')
            state.image = state.image === police ? ecilop : police
        }
    },
    getters: {
        message: state => state.message,
        image: state => state.image,
        getTitle: state => state.title
    }
}