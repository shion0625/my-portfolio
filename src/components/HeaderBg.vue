<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="400"
      shapeType="circle"
      :particleSize="5"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<style scoped>
#particles-js {
  background-color: #000000;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
}
</style>
