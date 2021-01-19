<template>
  <div class="input-wrapper">
    <icon :name="icon" />
    <div class="line"></div>
    <input
      @input="handleInput"
      :value="value"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-wrapper {
  border: 1px solid rgba(255, 158, 1, 0.7);
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  .line {
    width: 1px;
    background-color: #ff9e01;
    height: 100%;
  }
  input {
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: #ff9e01;
    border-left: 1px solid #ff9e01;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 18px;
  }
}
</style>
