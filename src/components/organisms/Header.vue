<template>
  <header :class="$style.header">
    <h1 :class="$style.name">to do list</h1>
  </header>
</template>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.header {
  font-family: "Open Sans", sans-serif;
  background-color: $header;
  text-align: center;
  height: 3.125rem;

  .name {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }
}
</style>
