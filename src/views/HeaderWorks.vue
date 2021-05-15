<template>
  <div>
    <button>works header</button>
    <HeaderWord :title="title"></HeaderWord>
  </div>
</template>

<script>
import HeaderWord from "../components/HeaderWord";
export default {
  data() {
    return {
      title: "WORKS",
    };
  },
  components: {
    HeaderWord,
  },
};
</script>
