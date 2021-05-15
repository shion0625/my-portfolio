<template>
  <div id="app">
    <div id="header">
      <HeaderBg></HeaderBg>
      <router-view name="header"></router-view>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderBg from "./components/HeaderBg";
// import Menu from './components/Menu'
export default {
  components: {
    HeaderBg,
  },
};
</script>

<style scoped>
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
  /*htmlのデフォルトフォントサイズ10px*/
}

body {
  margin: 0;
}

#header {
  height: 100vh;
  width: 100vw;
}
</style>
