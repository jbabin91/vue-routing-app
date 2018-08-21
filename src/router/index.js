import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import ViewProfile from '@/components/ViewProfile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile,
    },
  ],
});
