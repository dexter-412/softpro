import {
    SET_TO_DO_LIST,
    CHANGE_STATUS,
    DELETE_ITEM,
    EDIT_ITEM
} from './mutatation-types'

export default {
    namespaced: true,

    state: {
        toDoList: [
            {
                id: 100,
                isCompleted: false,
                name: 'Task 1'
            },
            {
                id: 1000,
                isCompleted: true,
                name: 'Task 2'
            }
        ]
    },

    getters: {
      getStatistic(state, getters) {
          const completedList = getters.getCompletedList;
          const completedPercent = Math.round((completedList.length * 100) / state.toDoList.length);
          const noCompletedPercent = 100 - completedPercent;

          return [completedPercent, noCompletedPercent];
      },

      getCompletedList: state => state.toDoList.filter(item => item.isCompleted),

      getNoCompletedList: state => state.toDoList.filter(item => !item.isCompleted),
    },

    mutations: {
        [EDIT_ITEM](state, data) {
            const desiredItem = state.toDoList.findIndex((item) => item.id === data.id);
            state.toDoList[desiredItem].name = data.name;
        },

        [DELETE_ITEM](state, itemId) {
            const desiredItem = state.toDoList.findIndex((item) => item.id === itemId);
            state.toDoList.splice(desiredItem, 1);
        },

        [CHANGE_STATUS](state, itemId) {
            const desiredItem = state.toDoList.findIndex((item) => item.id === itemId)
            state.toDoList[desiredItem].isCompleted = !state.toDoList[desiredItem].isCompleted
        },

        [SET_TO_DO_LIST](state, newListItem) {
            state.toDoList.unshift(
                {
                    id: state.toDoList.length,
                    isCompleted: false,
                    name: newListItem
                }
            );
        }
    }
};