<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition name="fade" @enter="enter" @leave="leave">
      <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionTeste",
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    enter(elemento) {
      console.log(elemento.classList.add("teste"));
    },

    leave() {
      console.log("Elemento Sumiu");
    },
  },
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
