<template>
  <nav v-if="show">
    <ul>
      <li>
        <router-link :to="{ name: 'TopHome' }"
          ><i class="fas fa-home"></i>HOME</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'MyWorks' }"
          ><i class="fas fa-laptop"></i> WORKS</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'AboutMe' }"
          ><i class="fas fa-user"></i> ABOUT</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ContactToMe' }"
          ><i class="fas fa-envelope"></i> CONTACT</router-link
        >
      </li>
    </ul>
  </nav>
  <nav v-else id="nav-ber">
    <button>else</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "https://use.fontawesome.com/releases/v5.13.0/css/all.css";

$breakpoints: (
  "sm": "screen and (min-width: 400px)",
  "md": "screen and (min-width: 768px)",
  "lg": "screen and (min-width: 1000px)",
  "xl": "screen and (min-width: 1200px)",
) !default;

nav {
  background-color: white;
  list-style: none;
  opacity: 0.8;
  li {
    list-style: none;
    display: inline;
  }
}
</style>
