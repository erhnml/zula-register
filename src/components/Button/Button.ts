import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./Button.vue";

@Component({
  name: "custom-button",
  mixins: [template]
})
export default class Button extends Vue {
  @Prop() bgColor!: string;
  @Prop() title!: string;
  @Prop() disabled!: boolean;
  @Prop() onClick!: void;

  get getStyle() {
    return `${
      this.disabled
        ? "background-color: gray"
        : `background-image: url(${require(`../../assets/button-bg-${this.bgColor}.png`)});`
    }`;
  }
}
