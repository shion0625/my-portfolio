<template>
  <div id="app">
    <div id="header">
      <HeaderBg></HeaderBg>
      <router-view name="header"></router-view>
    </div>
    <div id="content">
      <router-view />
    </div>
    <div id="fotter">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script scoped>
import HeaderBg from "./components/HeaderBg";
export default {
  components: {
    HeaderBg,
  },
};
</script>

<style lang="scss">
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
  /*htmlのデフォルトフォントサイズ10px*/
  body {
    margin: 0;
    #header {
      height: 100vh;
      width: 100vw;
    }
  }
}
</style>
