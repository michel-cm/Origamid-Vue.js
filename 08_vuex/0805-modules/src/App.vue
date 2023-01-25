<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        <p>{{ livro.nome }}</p>
      </li>
    </ul>
    <h2>Livros lidos</h2>
    <ul>
      <li v-for="livro in livrosLidos(true)" :key="livro.nome">
        <p>{{ livro.nome }}</p>
      </li>
    </ul>
    {{ $store.state.acao.acao }}
    <AlunoView />
    <CursoView />
  </div>
</template>

<script>
import AlunoView from "@/components/AlunoView.vue";
import CursoView from "@/components/CursoView.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AlunoView,
    CursoView,
  },
  computed: {
    ...mapGetters(["livrosLidos"]),
  },
  created() {
    this.$store.dispatch("acao/puxarAcao");
  },
};
</script>

<style></style>
