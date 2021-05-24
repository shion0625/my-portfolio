<template>
  <div id="h-contact">
    <NavMenu :is-contact="isContact"></NavMenu>
    <div class="sub-title">
      <SubTitle></SubTitle>
    </div>
  </div>
</template>

<script>
import SubTitle from "../components/SubTitleContact";
import NavMenu from "../components/Nav";
export default {
  data() {
    return {
      isContact: true,
    };
  },
  components: {
    SubTitle,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
#h-contact {
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
