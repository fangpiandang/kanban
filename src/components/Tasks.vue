<template>
    <div>
        <div class="top">
            <span class="alltasks">All Tasks</span>
            <span class="rte" @click="dtodo">Remove this Event</span>
        </div>

        <div :group-name="same" class="tasks" v-for="(item, index) in kanban[current]">
            <span class="title">{{ index }}</span>
            <AddButton @click.native="alert(index)" style="margin-bottom: 20px"></AddButton>
            <Container
                @drop="(e) => onCardDrop(index, e)"
                group-name="col"
                :drop-placeholder="() => {}"
            >
                <Draggable class="square" v-for="(item1, index1) in item">
                    <h2 class="taskTitle">{{ item1.name }}</h2>
                    <div class="taskContent">{{ item1.content }}</div>
                    <div class="remove-bar" @click="remove(index1, index)"><i>-</i></div>
                </Draggable>
            </Container>
        </div>
    </div>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { mapState } from 'vuex'
import AddButton from './small/AddButton.vue'
export default {
    computed: {
        ...mapState(['kanban', 'current']),
    },
    data() {
        return {
            same: 'same',
            add: {},
        }
    },
    methods: {
        dtodo() {
            this.$store.commit('deleteCurrent')
        },
        alert(index) {
            let task = prompt('输入事件名字')
            let taskcontent = prompt('输入事件内容')
            if (task && taskcontent) {
                this.$store.commit('addNewTask', [index, { name: task, content: taskcontent }])
            }
        },
        remove(index1, index) {
            console.log(index1, index)
            this.$store.commit('deleteCurrentTask', [index1, index])
        },
        onCardDrop(index, e) {
            console.log(index)
            console.log(e)
            if (e.removedIndex !== null) {
                let location = [index, e.removedIndex]
                let result = this.$store.commit('getTask', location)
                this.add = this.$store.state.add
                this.$store.commit('deleteCurrentTask', [e.removedIndex, index])
            }
            if (e.addedIndex !== null) {
                this.$store.commit('addNewTask', [index, this.add])
            }
        },
    },
    components: {
        AddButton,
        Container,
        Draggable,
    },
}
</script>
<style scoped>
.top {
    padding: 22px 50px 0px 50px;
    display: flex;
    margin: 20px 0;
}
.alltasks {
    font-size: 2.5rem;
    font-weight: 600;
}
.rte {
    padding: 0 15px;
    line-height: 2.5rem;
    border: 2px solid red;
    border-radius: 12px;
    height: 2.5rem;
    margin-left: 20px;
    margin-top: 5px;
    cursor: pointer;
}
.rte:hover {
    background-color: red;
    color: white;
}
.tasks {
    width: calc(33% - 70px);
    border-radius: 10px;
    float: left;
    padding: 20px;
    background-color: #f6f9fa;
    margin: 0 5px;
}
.task {
    width: calc(85% - 2px);
}
.title {
    font-size: 1.4rem;
}
.button {
    width: 22vw;
    margin-top: 15px;
}
.taskTitle {
    font-weight: 300;
}
.taskTitle::before {
    content: '●';
    color: #f19737;
    margin-right: 10px;
}
.square {
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #ccc;
    width: 22vw;
    margin-bottom: 18px;
    position: relative;
}
.taskContent {
    color: #9c9c9c;
    font-size: 1.2rem;
    font-weight: 300;
}
.remove-bar {
    color: #888;
    font-size: 3.5rem;
    position: absolute;
    bottom: 15px;
    right: 15px;
    line-height: 1rem;
}
.remove-bar:hover {
    color: red;
    font-size: 8em;
    line-height: 1rem;
    transition: 1s;
    cursor: pointer;
}
</style>
