import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./Button.vue";

@Component({
  name: "custom-button",
  mixins: [template] // use mixins to mix vue file functions
})
export default class Button extends Vue {
  @Prop() bgColor!: string;
  @Prop() title!: string;
  @Prop() disabled!: boolean;
  @Prop() onClick!: void;

  get getStyle() {
    return `background-color: ${this.disabled ? "gray" : this.bgColor}`;
  }
}
