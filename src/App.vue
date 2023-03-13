<template>
    <div id="app">
        <!-- <HelloWorld /> -->
        <Enter></Enter>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Enter from './components/Enter.vue'
import './common.css'
export default {
    name: 'App',
    components: {
        HelloWorld,
        Enter,
    },
}
</script>
<style>
#app {
    height: 100%;
}
</style>
