<template>
  <button
    class="button"
    @click="onClick"
    :disabled="disabled"
    :style="getStyle"
  >
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 15px;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  background-size: cover;
  display: inline-block;
  font-weight: bold;
  background-color: gray;
}
</style>
