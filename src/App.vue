<template>
  <div id="app">
    <div id="header">
      <HeaderBg></HeaderBg>
      <transition name="fade" mode="out-in">
        <router-view name="header"></router-view>
      </transition>
    </div>
    <div id="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
