<template>
  <header>
    <nav>
      <router-link to="/" tag="span" class="logo">To-Do List</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');

  nav {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    color: whitesmoke;
    text-align: center;
    height: 60px;
    padding-top: 8px;
    position: fixed;
    width: 100%;
    margin-bottom: 100px;
    overflow: hidden;
    top: 0;
    z-index: 2;
    box-shadow: 0px 1px 10px #999;
  }
  .logo {
    font-family: 'Teko', sans-serif;
    font-size: 35px;
    margin-top: 30px;
    cursor: pointer;
  }
</style>
