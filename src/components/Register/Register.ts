import Vue from "vue";
import { Component } from "vue-property-decorator";
import template from "./Register.vue";
import Input from "../Input/Input";
import Button from "../Button/Button";

@Component({
  name: "regsiter",
  components: {
    Input,
    Button
  },
  mixins: [template]
})
export default class Register extends Vue {
  username = "";
  email = "";
  password = "";
  userAgr = true;
  announce = false;

  handleClick() {
    const { username, password, email } = this;
    const emailRgx = /\S+@\S+\.\S+/;
    if (username === "" || email === "" || password === "") {
      return alert(" Tüm alanları doldurmalısın!");
    } else if (!emailRgx.test(email)) {
      return alert("Geçersiz email adresi!");
    }
    alert("Kayit basarili!");
  }
}
