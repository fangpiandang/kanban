<template>
    <div>
        <div class="left" v-for="(item, index) in items">
            <Container @drop="(e) => onCardDrop(index, e)" group-name="col">
                <Draggable v-for="theitem in item">
                    <div class="block">{{ theitem }}</div>
                </Draggable>
            </Container>
        </div>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
export default {
    name: 'Simple',
    components: { Container, Draggable },
    data() {
        return {
            items: [
                [1, 2, 3],
                [4, 5, 6],
            ],
            add: undefined,
            location: [],
        }
    },
    methods: {
        onCardDrop(index, e) {
            if (e.removedIndex !== null) {
                this.add = this.items[index][e.removedIndex]
                this.items[index].splice(e.removedIndex, 1)
            }
            if (e.addedIndex !== null) {
                this.location.push(index)
                console.log(index, e.addedIndex)
                this.location.push(e.addedIndex)
            }
            if (index + 1 == this.items.length) {
                this.items[this.location[0]].splice(this.location[1], 0, this.add)
            }
        },
    },
}
</script>
<style>
.block {
    height: 100px;
    width: 100px;
    background-color: pink;
}
.left {
    float: left;
}
</style>
