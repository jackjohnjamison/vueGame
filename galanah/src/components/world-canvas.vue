<template>
    <canvas />
</template>

<script>
    export default {
        name: 'worldCanvas',
        props: {
            
        },
        data() {
            return {
                lastRender: 0,
                progress: 0
            }
        },
        methods: {
            // FROM https://www.sitepoint.com/quick-tip-game-loop-in-javascript/
            update(progress) {
                // Update the state of the world for the elapsed time since last render
                console.log(progress)
            },
        
            draw() {
                // Draw the state of the world
            },
            
            loop(timestamp) {
                var progress = timestamp - this.lastRender

                this.update(progress)
                this.draw()

                this.lastRender = timestamp
                window.requestAnimationFrame(this.loop)
            },
        },
        mounted() {
            this.lastRender = 0;
            window.requestAnimationFrame(this.loop)
        }
    }
</script>

<style scoped>
    canvas {
        width: 100%;
        height: 500px;
        background-color: #000;
    }
</style>