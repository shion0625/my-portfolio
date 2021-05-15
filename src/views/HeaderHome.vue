<template>
  <div class="home" id="particles-js">
    <div class="content">
      <div class="content-text">
        <h1>Kaito Yodogawa</h1>
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'TopHome' }" class="btn btn_affect"
                ><i class="fas fa-home"></i>HOME</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'MyWorks' }" class="btn btn_affect"
                ><i class="fas fa-laptop"></i> WORKS</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'AboutMe' }" class="btn btn_affect"
                ><i class="fas fa-user"></i> ABOUT</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'ContactToMe' }" class="btn btn_affect"
                ><i class="fas fa-envelope"></i> CONTACT</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHome",
};
</script>

<style scoped>
@charset "UTF-8";
@import "https://use.fontawesome.com/releases/v5.13.0/css/all.css";
*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

#particles-js {
  position: relative;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.content {
  height: 100vh;
  width: 100vw;
  display: block;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

h1 {
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 8rem;
  margin-bottom: 30%;
}

nav {
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  margin: 0 10% 0 10%;
  width: 45rem;
  text-align: center;
}

ul {
  list-style-type: none;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
}

li {
  display: inline-block;
}

.m_icon {
  width: 45px;
  height: 46px;
}

i {
  width: 4.5rem;
  height: 4.5rem;
  font-size: 4rem;
}

a.btn {
  margin: 0.8rem;
  width: 7.5rem;
  height: 7.6rem;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: gray;
  border-radius: 0.5rem;
}

a.btn_affect {
  border-radius: 50%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(white),
    color-stop(36%, #bcbbbe),
    color-stop(50%, #9b9b9b),
    color-stop(64%, #bdbcbf),
    to(white)
  );
  background-image: linear-gradient(
    180deg,
    white 0%,
    #bcbbbe 36%,
    #9b9b9b 50%,
    #bdbcbf 64%,
    white 100%
  );
  -webkit-box-shadow: 0 8px 0 #4d4d4d, inset 0 0 5px black,
    inset 1px 1px 10px white, inset 1px 1px 10px white, inset 1px 1px 10px white,
    inset 1px 1px 10px white, inset 1px 1px 10px white;
  box-shadow: 0 8px 0 #4d4d4d, inset 0 0 5px black, inset 1px 1px 10px white,
    inset 1px 1px 10px white, inset 1px 1px 10px white, inset 1px 1px 10px white,
    inset 1px 1px 10px white;
  justify-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

a.btn-affect::before {
  border-radius: 50%;
  background-image: linear-gradient(
    140deg,
    #9b9b9b 0%,
    #9b9b9b 0%,
    #9b9b9b 0%,
    #9b9b9b 0%,
    #9b9b9b 0%,
    white 50%,
    #bcbbbe 64%,
    #9b9b9b 100%
  );
}

a.btn_affect {
  position: relative;
  z-index: 2;
  text-shadow: -1px 1px 0 white;
}

a.btn_affect:hover {
  -webkit-transform: translate(0, 3px);
  transform: translate(0, 3px);
  color: white;
  -webkit-box-shadow: 0 5px 0 #4d4d4d, inset 0 0 5px black,
    inset 1px 1px 10px white, inset 1px 1px 10px white, inset 1px 1px 10px white,
    inset 1px 1px 10px white, inset 1px 1px 10px white;
  box-shadow: 0 5px 0 #4d4d4d, inset 0 0 5px black, inset 1px 1px 10px white,
    inset 1px 1px 10px white, inset 1px 1px 10px white, inset 1px 1px 10px white,
    inset 1px 1px 10px white;
}

a.btn_affect:hover {
  text-shadow: 0 0 5px #e9e397, 0 0 5px #e9e397, 0 0 5px #e9e397;
}

@media screen and (max-width: 1024px) {
  a.bth {
    width: 7.5rem;
    height: 7.6rem;
  }
}
@media screen and (max-width: 896px) {
  a.btn {
    width: 6.5rem;
    height: 6.6rem;
  }
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 6rem;
  }

  nav {
    width: 40rem;
    margin: 0;
  }
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 4rem;
    text-align: center;
  }

  a.btn {
    width: 5.5rem;
    height: 5.6rem;
  }
}
</style>
