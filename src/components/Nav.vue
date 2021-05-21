<template>
  <div id="navigation">
    <nav
      :class="{
        'bg-work': isWork,
        'bg-about': isAbout,
        'bg-contact': isContact,
      }"
      v-if="show"
    >
      <ul>
        <li id="Home">
          <router-link :to="{ name: 'TopHome' }"
            ><i class="fas fa-home"></i>HOME</router-link
          >
        </li>
        <li id="Works">
          <router-link :to="{ name: 'MyWorks' }"
            ><i class="fas fa-laptop"></i> WORKS</router-link
          >
        </li>
        <li id="About">
          <router-link :to="{ name: 'AboutMe' }"
            ><i class="fas fa-user"></i> ABOUT</router-link
          >
        </li>
        <li id="Contact">
          <router-link :to="{ name: 'ContactToMe' }"
            ><i class="fas fa-envelope"></i> CONTACT</router-link
          >
        </li>
      </ul>
    </nav>
    <nav v-else>
      <button>kajfojeo</button>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["isWork", "isAbout", "isContact"],
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
  "sm": "screen and (max-width: 480px)",
  "sl": "screen and (max-width: 600px)",
  "md": "screen and (max-width: 750px)",
  "lg": "screen and (max-width: 896px)",
  "xl": "screen and (max-width: 1024px)",
) !default;
@mixin mq($breakpoint: xl) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

#navigation {
  .bg-work {
    background-color: turquoise;
  }
  .bg-about {
    background-color: palegoldenrod;
  }
  .bg-contact {
    background-color: #e383da;
  }
  nav {
    ul {
      height: 8rem;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      @include mq() {
        height: 7rem;
      }
      @include mq(md) {
        height: 6rem;
      }
      @include mq(sl) {
        height: 5rem;
      }
      @include mq(sm) {
        height: 4rem;
      }
      li {
        font-size: 4rem;
        list-style: none;
        margin: auto;
        @include mq() {
          font-size: 3rem;
        }
        @include mq(md) {
          font-size: 2.5rem;
        }
        @include mq(sl) {
          font-size: 2rem;
        }
        @include mq(sm) {
          font-size: 1.5rem;
        }
        a:hover {
          text-shadow: 1px 2px 3px black;
          border-bottom: solid black;
        }
        i {
          padding-right: 8px;
          @include mq(sl) {
            padding-right: 5rpx;
          }
          @include mq(sm) {
            padding-right: 3px;
          }
        }
        a {
          color: lightslategrey;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
