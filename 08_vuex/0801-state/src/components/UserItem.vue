<template>
  <p>User {{ aulasCompletas }} aulas completas</p>
</template>

<script>
export default {
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    },
  },
};
</script>
