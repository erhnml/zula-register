import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./Input.vue";
import Icon from "../Icon";

@Component({
  name: "custom-input",
  components: {
    Icon
  },
  mixins: [template] // use mixins to mix vue file functions
})
export default class Input extends Vue {
  @Prop() private icon!: string;
  @Prop() private placeholder!: string;
  @Prop() private value!: string;
  @Prop() private type!: string;

  handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.$emit("input", target.value);
  }
}
