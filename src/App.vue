<template>
  <div id="app">
    <ListPage />
  </div>
</template>

<script>

import ListPage from "./components/pages/ListPage";

export default {
  name: 'App',

  components: {
    ListPage
  }
}
</script>

<style lang="scss">
@import "src/styles/style";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
