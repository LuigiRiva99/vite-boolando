<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import axios from 'axios'
import { store } from './store.js'

export default {
  components : {
    AppFooter,
    AppHeader,
    AppMain
  },

  // data() {
  //   return {
  //     store 
  //   }
  // },

  methods: {
    axiosCall() {
      axios.get('http://localhost:3000/products').then((res) => {
        store.products = res.data
      })
    }
  },
  created() {
    this.axiosCall()
  }
}
</script>

<template>

<AppHeader/>

<AppMain/>

<AppFooter/>

</template>

<style lang="scss">
@use './style/general'
</style>
