import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const HeaderHome = () =>
  import(/* webpackChunkName: "about" */ "../views/HeaderHome.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const HeaderAbout = () =>
  import(/* webpackChunkName: "header-about" */ "../views/HeaderAbout.vue");
const Works = () =>
  import(/* webpackChunkName: "header-about" */ "../views/Works.vue");
const HeaderWorks = () =>
  import(/* webpackChunkName: "header-about" */ "../views/HeaderWorks.vue");
const Contact = () =>
  import(/* webpackChunkName: "header-about" */ "../views/Contact.vue");
const HeaderContact = () =>
  import(/* webpackChunkName: "header-about" */ "../views/HeaderContact.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TopHome",
    components: {
      default: Home,
      header: HeaderHome,
    },
  },
  {
    path: "/works",
    name: "MyWorks",
    components: {
      default: Works,
      header: HeaderWorks,
    },
  },
  {
    path: "/about",
    name: "AboutMe",
    components: {
      default: About,
      header: HeaderAbout,
    },
  },
  {
    path: "/contact",
    name: "ContactToMe",
    components: {
      default: Contact,
      header: HeaderContact,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
