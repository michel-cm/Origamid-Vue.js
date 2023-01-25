<template>
  <div id="app">
    {{ $store.state.acao }}
    <AlunoView />
    <CursoView />
  </div>
</template>

<script>
import AlunoView from "@/components/AlunoView.vue";
import CursoView from "@/components/CursoView.vue";

export default {
  name: "App",
  components: {
    AlunoView,
    CursoView,
  },
  created() {
    this.$store.dispatch("puxarAcao");
  },
};
</script>

<style></style>
