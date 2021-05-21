<template>
  <div>
    <div id="nav">
      <nav-menu></nav-menu>
    </div>
    <SubTitle></SubTitle>
  </div>
</template>

<script>
import SubTitle from "../components/SubTitleWorks";
import NavMenu from "../components/Nav";
export default {
  components: {
    SubTitle,
    NavMenu,
  },
};
</script>
