import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Carousel, Slide } from "vue-carousel";
import template from "./Carousel.vue";
import Icon from "../Icon";

@Component({
  name: "custom-carousel",
  components: {
    Carousel,
    Slide,
    Icon
  },
  mixins: [template] // use mixins to mix vue file functions
})
export default class CustomCarousel extends Vue {
  @Prop({ default: [] }) items: { id: string; img: string; title: string }[];
  @Prop() value: number;
  @Prop() headerTitle: string;
}
