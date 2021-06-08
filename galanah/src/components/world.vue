<template>
    <div class="panel">
        <h2>World</h2>
        <worldCanvas ref="world-canvas" id="world-canvas" />
    </div>
</template>

<script>
    import worldCanvas from './world-canvas.vue'

    export default {
        name: 'game',
        props: {
            /// msg: String
        },
        components: {
            worldCanvas
        }
    }
</script>

<style scoped>

</style>