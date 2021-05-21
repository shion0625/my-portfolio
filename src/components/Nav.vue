<template>
  <div id="app">
    <nav v-if="show">
      <ul>
        <li data-text="Home">
          <router-link :to="{ name: 'TopHome' }"
            ><i class="fas fa-home"></i>HOME</router-link
          >
        </li>
        <li data-text="Works">
          <router-link :to="{ name: 'MyWorks' }"
            ><i class="fas fa-laptop"></i> WORKS</router-link
          >
        </li>
        <li data-text="About">
          <router-link :to="{ name: 'AboutMe' }"
            ><i class="fas fa-user"></i> ABOUT</router-link
          >
        </li>
        <li data-text="Contact">
          <router-link :to="{ name: 'ContactToMe' }"
            ><i class="fas fa-envelope"></i> CONTACT</router-link
          >
        </li>
      </ul>
    </nav>
    <nav v-if="show"></nav>
  </div>
</template>

<style lang="scss" scoped>
#app {
  nav {
    background-color: white;
  }
}
</style>
