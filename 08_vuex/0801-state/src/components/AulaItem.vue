<template>
  <div>
    <p>
      Aula {{ totalAulas }}, esse é o usuario: {{ user }},
      {{ aulasCompletas }} aulas completas
    </p>
    <p>Nome upperCase: {{ nomeMaiusculo }}</p>
    <button @click="mostrarConsole">Mostrar no console</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Michel",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    mostrarConsole() {
      console.log(this.$store.state.user);
    },
  },
};
</script>
