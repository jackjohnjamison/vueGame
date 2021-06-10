<template>
        <div class="content">
            <stats />
            <world />
        </div>
</template>

<script>
    import stats from './components/stats.vue'
    import world from './components/world.vue'

    export default {
        name: 'App',
        components: {
            stats,
            world
        }
    }
</script>

<style>
    #app {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 20px auto;
        max-width: 1200px;
    }

    .content {
        display: flex;
    }

    .panel {
        width: 50%;
        padding: 0 20px;
    }
</style>
