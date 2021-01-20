import Vue from "vue";
import { Component } from "vue-property-decorator";
import template from "./Register.vue";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

@Component({
  name: "regsiter",
  components: {
    Input,
    Button,
    Carousel
  },
  mixins: [template]
})
export default class Register extends Vue {
  username = "";
  email = "";
  password = "";
  userAgr = false;
  announce = false;
  selectedBigGun = null;
  selectedGun = null;
  selectedKnife = null;
  selectedCharacter = null;

  bigGuns = [
    { id: 1, title: "Big Gun 1", img: "big-gun-1.png" },
    { id: 2, title: "Big Gun 2", img: "big-gun-2.png" },
    { id: 3, title: "Big Gun 3", img: "big-gun-3.png" }
  ];
  guns = [
    { id: 1, title: "Gun 1", img: "gun-1.png" },
    { id: 2, title: "Gun 2", img: "gun-2.png" },
    { id: 3, title: "Gun 3", img: "gun-3.png" }
  ];
  knives = [
    { id: 1, title: "Knife 1", img: "knife-1.png" },
    { id: 2, title: "Knife2", img: "knife-2.png" },
    { id: 3, title: "Knife 3", img: "knife-3.png" }
  ];
  characters = [
    { id: 1, title: "Zeynep", img: "zeynep.png" },
    { id: 2, title: "Şahin", img: "sahin.png" },
    { id: 3, title: "Elena", img: "elena.png" }
  ];

  handleClick() {
    const { username, password, email } = this;
    const emailRgx = /\S+@\S+\.\S+/;
    if (username === "" || email === "" || password === "") {
      return this.$toast.open({
        message: "Tüm alanları doldurmalısın!!",
        type: "error"
      });
    } else if (!emailRgx.test(email)) {
      return this.$toast.open({
        message: "Geçersiz email adresi!",
        type: "error"
      });
    }
    fetch("https://jsonplaceholder.typicode.com/todos/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        this.$toast.open({
          message: "Kayıt Başarılı!",
          type: "success"
        });
      })
      .catch(error => {
        this.$toast.open({
          message: error,
          type: "error"
        });
      });
  }
}
