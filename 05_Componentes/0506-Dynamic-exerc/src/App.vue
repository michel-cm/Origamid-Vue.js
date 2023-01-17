<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva = 'SobreEmpresa'">Sobre</li>
      <li @click="abaAtiva = 'ServicosEmpresa'">Serviços</li>
      <li @click="abaAtiva = 'ContatoEmpresa'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./components/SobreEmpresa.vue";
import ContatoEmpresa from "./components/ContatoEmpresa.vue";
import ServicosEmpresa from "./components/ServicosEmpresa.vue";

export default {
  name: "App",
  components: {
    SobreEmpresa,
    ContatoEmpresa,
    ServicosEmpresa,
  },
  data() {
    return {
      abaAtiva: "",
    };
  },
};
</script>

<style>
</style>
