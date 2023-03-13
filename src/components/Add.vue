<template>
    <div class="wrap">
        <div class="title" style="font-size: 2rem">
            <i><b>.kanban</b></i>
        </div>
        <AddButton @click.native="add"></AddButton>
        <div
            class="list"
            :style="index === current ? { backgroundColor: '#e86a3d', color: 'white' } : {}"
            @click="change(index)"
            v-for="(item, index) in kanban"
        >
            {{ index }}
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import AddButton from './small/AddButton.vue'
export default {
    data() {
        return {}
    },
    components: {
        AddButton,
    },
    methods: {
        add() {
            const title = prompt('请输入标题')
            this.$store.commit('newTitle', title)
        },
        change(index) {
            this.$store.state.current = index
        },
    },
    computed: {
        ...mapState(['kanban', 'current']),
    },
    mounted() {},
}
</script>
<style scoped>
.wrap {
    height: 100%;
    border-right: 2px solid #ededed;
    text-align: center;
}
.title {
    padding: 1.5rem 0;
}
.list {
    width: 10vw;
    height: 5vh;
    line-height: 5vh;
    cursor: pointer;
    border-radius: 5px;
    border: 0px;
    margin: 0 auto;
    margin-top: 1rem;
}
.list:hover {
    background-color: #e86b3dc4;
    color: white;
}
</style>
