<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/global/Header.vue';
import Footer from '@/global/Footer.vue';

export default {
  components: { 
    Header,
    Footer
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
