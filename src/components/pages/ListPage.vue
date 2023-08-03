<template>
<div class="list-page">
   <div class="container">
      <h1 class="list-page__title">TODO List</h1>
      <ToDoForm class="list-page__form" />
      <hr>
     <ToDoList class="list-page__list"/>
     <hr>
     <BarChart />
   </div>
</div>
</template>

<script>
import ToDoForm from "../business-comconents/ToDoForm";
import ToDoList from "../business-comconents/ToDoList";
import BarChart from "../business-comconents/Chart";

export default {
  name: "ListPage",

  components: {
    BarChart,
    ToDoList,
    ToDoForm
  }
}
</script>

<style lang="scss">
.list-page {
  &__form {
    margin-bottom: 15px;
  }

  &__list {
    margin-top: 15px;
  }

  &__title {
    text-align: center;
    margin: 15px 0;
  }
}
</style>