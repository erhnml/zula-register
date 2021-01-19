import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./Icon.vue";

@Component({
  name: "icon",
  mixins: [template] // use mixins to mix vue file functions
})
export default class Icon extends Vue {
  @Prop() private name!: string;
}
