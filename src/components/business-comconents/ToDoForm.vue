<template>
  <form
      class="to-do-form"
      @submit.prevent="submitToDoName()"
  >
    <ToDoInput
        v-model="toDoName"
        :is-error="isError"
    />
  </form>
</template>

<script>
import ToDoInput from "../ui-components/ToDoInput";
import { mapMutations } from "vuex";

export default {
  name: "ToDoForm",

  data() {
    return {
      toDoName: '',
      isError: false
    }
  },

  methods: {
    ...mapMutations('toDo', ['SET_TO_DO_LIST']),

    submitToDoName() {
      if (this.toDoName) {
        this.SET_TO_DO_LIST(this.toDoName);
        this.toDoName = '';
      } else {
        this.isError = true;
      }
    }
  },

  watch: {
    toDoName(val) {
      if(val) {
        this.isError = false;
      }
    }
  },

  components: {
    ToDoInput
  }
}
</script>

<style>

</style>