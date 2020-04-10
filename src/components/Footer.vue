<template>
    <footer>
        <span>content of footer</span>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,.4);
        padding: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>