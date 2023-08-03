<template>
  <div class="to-do-list-item">
    <div class="to-do-list-item__name-wrapper">
      <p
          class="to-do-list-item__name"
          v-if="!isEdit"
      >
        {{ item.name }}
      </p>
      <textarea
        class="to-do-list-item__editor"
        v-else
        rows="10"
        v-model="value"
      />
    </div>
    <div class="to-do-list-item__action-wrapper">
      <button
          class="to-do-list-item__button to-do-list-item__button--status"
          :class="[item.isCompleted
          ? 'to-do-list-item__button--status-completed'
          : 'to-do-list-item__button--status-no-completed']"
          @click="changeStatus"
      >
        {{ item.isCompleted ? "Виконано" : "Не виконано" }}
      </button>
      <button
          class="to-do-list-item__button to-do-list-item__button--edit"
          @click="editItem"
      >{{ isEdit ? 'Зберегти' : 'Редагувати' }}</button>
      <button
          class="to-do-list-item__button to-do-list-item__button--delete"
          @click="deleteItem"
      >Видалити</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ToDoListItem",

  props: {
    item: {
      type: Object,
      required: true
    },
  },

  data() {
    return {
      isEdit: false,
      value: '',
    }
  },

  mounted() {
    this.value = this.item.name;
  },

  methods: {
    ...mapMutations('toDo', ['CHANGE_STATUS', 'DELETE_ITEM', 'EDIT_ITEM']),

    editItem() {
      if(!this.isEdit) {
        this.isEdit = true;
      } else {
        const data = {
          id: this.item.id,
          name: this.value ? this.value : 'Не має назви'
        }
        this.EDIT_ITEM(data);
        this.isEdit = false;
      }
    },

    changeStatus() {
      this.CHANGE_STATUS(this.item.id);
    },

    deleteItem() {
      this.DELETE_ITEM(this.item.id);
    }
  }
}
</script>

<style lang="scss">
.to-do-list-item {
  border: 1px solid;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &__name-wrapper {
    width: 990px;
  }

  &__editor {
    width: 100%;
  }

  &__action-wrapper {
    width: 115px;
  }

  &__button {
    display: block;
    background: none;
    margin-bottom: 5px;
    border: 2px solid;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    cursor: pointer;

    &:hover {
      color: var(--color-white);
    }

    &--status-no-completed {
      border-color: rgb(var(--color-no-completed));
      background: rgba(var(--color-no-completed), .4);

      &:hover {
        background: rgb(var(--color-no-completed))
      }
    }

    &--status-completed {
      border-color: rgb(var(--color-completed));
      background: rgba(var(--color-completed), .4);

      &:hover {
        background: rgb(var(--color-completed))
      }
    }

    &--edit {
      border-color: rgb(var(--color-edit));
      background: rgba(var(--color-edit), .4);

      &:hover {
        background: rgb(var(--color-edit))
      }
    }

    &--delete {
      border-color: rgb(var(--color-delete));
      background: rgba(var(--color-delete), .4);

      &:hover {
        background: rgb(var(--color-delete))
      }
    }
  }
}
</style>