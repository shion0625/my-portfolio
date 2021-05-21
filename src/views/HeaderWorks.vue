<template>
  <div id="h-works">
    <NavMenu :is-work="isWorks"></NavMenu>
    <div class="sub-title">
      <SubTitle></SubTitle>
    </div>
  </div>
</template>

<script>
import SubTitle from "../components/SubTitleWorks";
import NavMenu from "../components/Nav";
export default {
  data() {
    return {
      isWorks: true,
    };
  },
  components: {
    SubTitle,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
#h-works {
  height: 100vh;
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
