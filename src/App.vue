<template>
  <v-app>
    <div class="all">
      <h3>Documets</h3>
      <v-treeview activatable :items="items" :open-on-click="true"></v-treeview>
      <CreateTheme></CreateTheme>
    </div>
  </v-app>
</template>

<script lang="ts">
import { mapGetters, Computed, mapMutations, MutationMethod } from "vuex";
import CreateTheme from "./components/CreateTheme.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { ThemeListService } from "./services/ThemeListService";

@Component({
  components: {
    CreateTheme
  },
  computed: mapGetters(["items"]),
  methods: mapMutations(["addItems"])
})
export default class AppVue extends Vue {
  protected items!: Computed;
  protected addItems!: MutationMethod;

  protected themeListService: ThemeListService;

  constructor() {
    super();
    this.themeListService = new ThemeListService();
  }

  public async created(): Promise<void> {
    try {
      const items: any = await this.themeListService.getThemeList();
      this.addItems(items);
    } catch(error) {
      console.warn(error);
    }
  }
}
</script>

<style>
.all {
  text-align: center;
  margin: 60px auto;
  width: 500px;
  border: 2px solid black;
}
</style>
