<template>
    <div class="container" @click="reverseMessage" :style="{background: `url(${image}) no-repeat center / cover`}">
        <div class="text">
            {{ message }}
        </div>
    </div>
</template>

<script>
    import "./scss/app.scss"
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        methods: mapMutations(['reverseMessage']),
        computed: mapGetters(['message', 'image'])
    }
</script>