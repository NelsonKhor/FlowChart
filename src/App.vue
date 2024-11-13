<script>
  export default {
    name: 'App',
  }
</script>

<template>
  <div id=""app>
    <header>
      <h1>Flow-Chart App</h1>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>