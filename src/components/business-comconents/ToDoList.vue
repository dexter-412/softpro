<template>
  <div class="to-do-list">
    <div class="to-do-list__filter">
      <span
        v-for="(filter, index) in filterSet"
        :key="index"
        class="to-do-list__filter-button"
        :class="{active: filter.isActive}"
        @click="getFilteredList(index)"
      >
        {{ filter.text }}
      </span>
    </div>
    <ToDoListItem
      v-for="listItem in localToDoList"
      :key="listItem.id"
      :item="listItem"
    />
  </div>
</template>

<script>
import ToDoListItem from "../ui-components/ToDoListItem";
import {
  mapState,
  mapGetters
} from "vuex";

export default {
  name: "ToDoList",

  computed: {
    ...mapState('toDo', ['toDoList']),
    ...mapGetters('toDo', ['getCompletedList', 'getNoCompletedList'])
  },

  data() {
    return {
      localToDoList: null,
      filterSet: [
        {
          text: 'Всі',
          isActive: true
        },
        {
          text: 'Виконані',
          isActive: false
        },
        {
          text: 'Не виконані',
          isActive: false
        }
      ]
    }
  },

  watch: {
    toDoList: {
      handler() {
        const index = this.filterSet.findIndex(item => item.isActive)
        this.getFilteredList(index)
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    getFilteredList(index) {
      this.filterSet.forEach(item => item.isActive = false);
      this.filterSet[index].isActive = true;
      switch (index) {
        case 0:
          this.localToDoList = this.toDoList;
          break;
        case 1:
          this.localToDoList = this.getCompletedList;
          break;
        case 2:
          this.localToDoList = this.getNoCompletedList;
          break;
      }

    }
  },

  components: { ToDoListItem },

}
</script>

<style lang="scss">
.to-do-list {

  &__filter {
    margin-bottom: 15px
  }

  &__filter-button {
    margin-right: 5px;
    background: rgba(var(--color-filter), .4);
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;

    &.active, &:hover  {
      background: rgb(var(--color-filter));
      color: var(--color-white);
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>