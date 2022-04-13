<template>
  <v-app>
      <Navigation />
    <v-main>
      <Content/>
      <router-view></router-view>
    </v-main><hr>
    <Footer />
  </v-app>
</template>

<script>
import Content from './components/Content';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Content,
    Navigation,
    Footer
    
  },

  data: () => ({
    //
  }),
};
</script>
