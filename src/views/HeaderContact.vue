<template>
  <div>
    <button>contact header</button>
    <HeaderWord :title="title"></HeaderWord>
  </div>
</template>

<script>
import HeaderWord from "../components/HeaderWord";
export default {
  data() {
    return {
      title: "CONTACT",
    };
  },
  components: {
    HeaderWord,
  },
};
</script>
