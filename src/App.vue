<template>
  <div class="all">
    <h3>Documets</h3>
    <v-treeview activatable :items="items" :open-on-click="true"></v-treeview>
    <CreateTheme></CreateTheme>
    <MyComponent></MyComponent>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateTheme from "./components/CreateTheme";
// import MyComponent from "./components/Test";
export default {
  computed: mapGetters(["items"]),
  components: {
    CreateTheme,
    // MyComponent
  }
};
</script>

<style>
.all {
  text-align: center;
  margin: 60px auto;
  width: 500px;
  border: 2px solid black;
}
</style>
