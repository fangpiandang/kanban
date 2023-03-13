import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)
const store = new vuex.Store({
    state:{
        kanban: {

        },
        current: undefined,
        add: {

        }
    },
    mutations: {
        newTitle(state,title) {
            vue.set(state.kanban,title,{
                'To do':[],
                'In progress':[],
                Completed:[]
            })
        },
        deleteCurrent(state){
            vue.delete(state.kanban,state.current)
        },
        getTask(state,array){
            console.log(array)
            state.add = state.kanban[state.current][array[0]][array[1]]
            
        },
        addNewTask(state,array){
            state.kanban[state.current][array[0]].push(array[1])
        },
        deleteCurrentTask(state,index){
            console.log(state.kanban[state.current][index[1]].splice(index[0],1))
        }
    }
})
export default store