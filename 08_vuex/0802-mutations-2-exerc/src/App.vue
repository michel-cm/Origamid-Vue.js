<template>
  <div id="app">
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
};
</script>

<style></style>
