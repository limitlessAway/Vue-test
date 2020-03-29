<template>
  <v-app>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Create theme</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Cteation of the document theme</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="themeTitle" label="Enter theme title" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="confirm">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { mapMutations, MutationMethod } from "vuex";
import Component from "vue-class-component";
import Vue from "vue";
import { AxiosStatic } from "axios";
import Axios from "axios";

@Component({
  methods: mapMutations(["createTheme"])
})
export default class CreateTheme extends Vue {
  public dialog: boolean = false;
  public themeTitle: string = "";
  public createTheme!: MutationMethod;
  public httpClient: AxiosStatic = Axios;

  public async confirm(): Promise<void> {
    this.createTheme({
      name: this.themeTitle,
      id: 99
    });
    this.themeTitle = "";
    this.dialog = false;
    await this.httpClient.get("https://api.coindesk.com/v1/bpi/currentprice.json");
  }
}
// import { mapMutations } from "vuex";
// export default {
//   data: () => ({
//     dialog: false,
//     themeTitle: ""
//   }),
//   methods: {
//     // createTheme() {
//     // this.$emit("createTheme", [this.themeTitle]);
//     ...mapMutations(["createTheme"]),
//     confirm() {
//       this.createTheme({
//         name: this.themeTitle,
//         id: 99
//       });
//       (this.themeTitle = ""), (this.dialog = false);
//     }
//   }
// };
</script>
