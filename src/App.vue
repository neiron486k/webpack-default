<template>
    <div class="container" :style="style">
        <div class="text" @click="reverseMessage">
            {{message}}
        </div>
    </div>
</template>

<script>
    import "./scss/app.scss"
    import police from "./assets/police.jpg"
    import ecilop from "./assets/ecilop.jpg"

    export default {
        data: function () {
            return {
                message: 'police',
                flg: false,
                style: {
                    background: `url(${police}) no-repeat center / cover`
                }
            }
        },
        methods: {
            reverseMessage: function () {
                this.flg = !this.flg

                if (this.flg) {
                    this.style.background = `url(${ecilop}) no-repeat center / cover`
                } else {
                    this.style.background = `url(${police}) no-repeat center / cover`
                }

                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>