<template>
    <div class="wrap">
        <Add class="add"></Add>
        <Tasks class="task"></Tasks>
    </div>
</template>
<script>
import Add from './Add.vue'
import Tasks from './Tasks.vue'
export default {
    components: {
        Add,
        Tasks,
    },
}
</script>
<style scoped>
.add {
    width: 15%;
    float: left;
}
.task {
    float: left;
}
.wrap {
    height: 100%;
}
</style>
