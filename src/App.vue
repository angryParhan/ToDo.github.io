<template>
  <div id="app">
    <navBar></navBar>
    <transition
        name="fade"
        mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>


<script>
  // @ is an alias to /src
  import navBar from './components/navBar'

  export default {
    name: 'Home',
    components: {
      navBar
    },
    created () {
      this.$store.commit('setState')
    }
  }
</script>

