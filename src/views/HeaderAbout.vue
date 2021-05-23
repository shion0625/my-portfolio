<template>
  <div id="h-about">
    <NavMenu :is-about="isAbout"></NavMenu>
    <div class="sub-title">
      <SubTitle />
    </div>
  </div>
</template>

<script>
import SubTitle from "../components/SubTitleAbout";
import NavMenu from "../components/Nav";
export default {
  data() {
    return {
      isAbout: true,
    };
  },
  components: {
    SubTitle,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
#h-about {
  height: 80vh;
  position: relative;
  .sub-title {
    width: 90%;
    margin: 0, auto;
    position: absolute;
    top: 40%;
    left: 5%;
  }
}
</style>
