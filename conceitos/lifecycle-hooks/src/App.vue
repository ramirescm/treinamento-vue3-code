<template>
  <div>lifecyle-hooks</div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("foi montado composition API");
    });
  },
};
// export default {
//   mounted() {
//     console.log("foi montado options API");
//   },
// };
</script>

<style scoped>
</style>
