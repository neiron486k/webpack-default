<template>
    <div class="root">
        <Header />
        <Main />
    </div>
</template>

<script>
    import "./scss/app.scss"
    import Header from "./components/Header";
    import Main from "./components/Main";

    export default {
        components: {
            Header,
            Main
        },
    }
</script>
<style scoped lang="scss">
    .root {
        position: relative;
        overflow: hidden;
    }
</style>