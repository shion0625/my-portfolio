<template>
  <div id="menu">
    <nav>
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
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
@import "https://use.fontawesome.com/releases/v5.13.0/css/all.css";

#menu {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0d0f1b;
  overflow: hidden;
}
ul {
  position: relative;
  display: flex;
  flex-direction: column;
}
ul li {
  list-style: none;
}
ul li:before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 6rem;
  font-weight: 700;
  pointer-events: none;
  opacity: 0;
  letter-spacing: 20px;
  transition: 0.5s;
  white-space: nowrap;
}
ul li:hover:before {
  opacity: 0.05;
  letter-spacing: 0px;
}
ul li .ber {
  position: relative;
  display: inline-block;
  padding: 6px 15px;
  text-decoration: none;
  background: #2196f3;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  transition: 0.5s;
  z-index: 1;
}
ul:hover li .ber {
  opacity: 0;
}
ul li .ber:hover {
  transform: scale(1.4);
  z-index: 1000;
  background: #ff3f81;
  opacity: 1;
}
ul li .ber:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100px;
  width: 80px;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  transform: skew(35deg);
  transition: 0s;
}
ul li .ber:hover:before {
  left: calc(100% + 100px);
  transition: 0.5s;
  transition-delay: 0.2s;
}
</style>
