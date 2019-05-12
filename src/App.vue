<template>
  <div id="app">
    <section class="header">
      <router-view name="navbar" />
    </section>
    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
