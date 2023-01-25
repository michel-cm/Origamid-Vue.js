<template>
  <div id="app">
    {{ $store.state.user }}
    <UserItem />
    <CursoItem />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue";
import CursoItem from "@/components/CursoItem.vue";

export default {
  name: "App",
  components: {
    UserItem,
    CursoItem,
  },
};
</script>

<style></style>
