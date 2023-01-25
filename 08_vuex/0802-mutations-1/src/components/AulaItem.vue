<template>
  <div>
    <p>
      Aula {{ totalAulas }}, esse é o usuario: {{ user }},
      {{ aulasCompletas }} aulas completas
    </p>
    <p>Nome upperCase: {{ nomeMaiusculo }}</p>

    <input type="text" v-model="novoUser" />

    <button @click="handleClick">Modificar Usuario</button>
    <button @click="COMPLETAR_AULA">Completar Aula</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Michel",
      novoUser: "",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    handleClick() {
      this.CHANGE_USER(this.novoUser);
    },
  },
};
</script>
