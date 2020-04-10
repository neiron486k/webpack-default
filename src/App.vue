<template>
    <div class="root">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
    import "./scss/app.scss"
    import Header from "./components/Header"
    import Main from "./components/Main"
    import Footer from "./components/Footer";

    export default {
        components: {
            Header,
            Main,
            Footer
        },
    }
</script>

<style scoped lang="scss">
    .root {
        position: relative;
        overflow: hidden;
        height: 100vh;
    }
</style>