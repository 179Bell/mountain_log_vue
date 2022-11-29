<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <router-view
          :logs="logs"
          @add-log="addLog"></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/global/Header.vue';
import Footer from '@/global/Footer.vue';
const STORAGE_KEY = 'mountain_log'

export default {
  components: { 
    Header,
    Footer
  },
  name: 'App',

  data(){
    return {
      logs: [],
      newLog: null
    }
  },
  mounted(){
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.logs = JSON.parse(localStorage.getItem(STORAGE_KEY))
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  },
  methods: {
    addLog(e) {
      this.logs.push({
        id: this.logs.length,
        name: e.name,
        image: e.img
      });
      console.log(this.logs)
      this.saveLog();
    },
    saveLog() {
      const parsed = JSON.stringify(this.logs);
      localStorage.setItem(STORAGE_KEY, parsed)
    }
  }
};
</script>
