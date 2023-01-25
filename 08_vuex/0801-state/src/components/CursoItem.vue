<template>
  <div>
    <p>Curso</p>
    <AulaItem />
  </div>
</template>

<script>
import AulaItem from "@/components/AulaItem.vue";

export default {
  name: "CursoItem",
  components: {
    AulaItem,
  },
};
</script>
