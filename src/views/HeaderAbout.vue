<template>
  <div>
    <button>about header</button>
    <HeaderWord :title="title"></HeaderWord>
  </div>
</template>
<script>
import HeaderWord from "../components/HeaderWord";
export default {
  data() {
    return {
      title: "ABOUT",
    };
  },
  components: {
    HeaderWord,
  },
};
</script>
