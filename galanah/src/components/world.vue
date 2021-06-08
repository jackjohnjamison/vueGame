<template>
    <div class="panel">
        <h2>World</h2>
        <canvas id="world-canvas" />
    </div>
</template>

<script>
    import engine from '../../imports/engine.js'

    export default {
        name: 'world',
        props: {
            /// msg: String
        },
        methods: {

        },
        mounted() {
            engine()
        }
    }
</script>

<style scoped>
    #world-canvas {
        width: 100%;
        height: 500px;
        background-color: #000;
    }
</style>