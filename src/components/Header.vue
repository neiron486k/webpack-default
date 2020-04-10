<template>
    <header>
        {{ message }}
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Header",
        computed: mapGetters({ message: 'main/message' })
    }
</script>

<style scoped lang="scss">
    header {
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, .4);
        width: 100%;
        color: white;
        font-weight: bold;
        text-align: left;
        padding: 16px;
        font-size: 1.5rem;
    }
</style>