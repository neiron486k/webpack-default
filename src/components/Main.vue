<template>
    <div class="container" @click="reverseMessage" :style="{background: `url(${image}) no-repeat center / cover`}">
        <div class="text">
            {{ message }}
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "Main",
        computed: mapGetters({
            message: 'main/message',
            image: 'main/image'
        }),
        methods: mapMutations({
            reverseMessage: 'main/reverseMessage'
        })
    }

</script>

<style scoped lang="scss">
    .container {
        overflow: hidden;
        height: 100vh;
        display: flex;
        align-items: center;
        cursor: pointer;;
    }

    .text {
        font-size: 12rem;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        background: white;
        display: flex;
        justify-content: center;
        mix-blend-mode: screen;
    }
</style>