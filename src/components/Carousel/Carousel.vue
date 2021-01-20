<template>
  <div>
    <h3 class="header-title">{{ headerTitle }}</h3>
    <carousel
      class="carousel"
      :perPage="1"
      :paginationEnabled="false"
      :navigationEnabled="true"
    >
      <slide v-for="{ title, id, img } in items" :key="id">
        <div class="item-wrapper">
          <label class="custom-checkbox">
            <input
              type="checkbox"
              :checked="id === value"
              @change="$emit('input', $event.target.checked ? id : null)"
              :true-value="true"
              :false-value="false"
            />
            <span></span>
          </label>

          <div class="item-img">
            <img
              :src="require(`../../assets/${img}`)"
              alt=""
              class="item img"
            />
          </div>
          <div class="item-title" :class="{ active: id === value }">
            <span>{{ title }}</span>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<style lang="scss">
.header-title {
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 10px;
}
.carousel {
  margin-bottom: 10px;
  .VueCarousel-navigation-button {
    font-size: 24px !important;
    color: #ff9e01 !important;
  }
  .custom-checkbox {
    position: absolute;
    top: 10px;
    right: 10px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border: 1px solid #ff9e01;
      border-radius: 5px;
      transition: all linear 0.3s;
      &:after {
        content: "";
        border-bottom: 2px solid #ff9e01;
        border-right: 2px solid #ff9e01;
        height: 9px;
        width: 4px;
        transform: rotate(45deg);
        visibility: hidden;
      }
    }
    input {
      display: none;
      &:checked ~ span {
        &:after {
          visibility: visible;
        }
      }
    }
  }
  .item-wrapper {
    background-color: black;
    padding-top: 20px;
    position: relative;
    .item-img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: cover;
      height: 100px;
      img {
        height: 100%;
      }
    }
    .item-title {
      color: #ff9e01;
      background-color: #1c1c1c;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px 0px;
      &.active {
        background-color: #ff9e01;
        color: #1c1c1c;
      }
      span {
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
}
</style>
