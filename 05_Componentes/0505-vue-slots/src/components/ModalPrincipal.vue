<template>
  <div class="modal">
    <slot name="header"></slot>
    <h1>{{ user.nome }}</h1>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      user: {
        nome: "Michel",
      },
    };
  },
};
</script>

<style>
</style>
