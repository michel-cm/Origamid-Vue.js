<template>
  <div>
    <div id="app">
      {{ mensagem }}
      <MainHeader />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: "Está é minha mensagem",
    };
  },
};
</script>

<style>
</style>
