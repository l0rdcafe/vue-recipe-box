<template>
  <div class="header" style="background-color: #176f8a;">
    <h1 class="header__heading" style="color: #fff;">RECIPE BOX</h1>
    <i class="fas fa-plus-circle fa-lg fa-2x" style="color: #fff;" @click="handleModal(true, 'add')" />
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["handleModal"]
}
</script>
<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  cursor: pointer;
  color: "#fff";
  transition: opacity 0.25s;
  margin-right: 2%;
}

i:hover {
  opacity: 0.7;
}

.header__heading {
  text-align: center;
  color: "#fff";
  margin-left: 2%;
}
</style>