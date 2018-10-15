<template>
  <ul v-if="currRecipe">
    <li v-for="recipe in recipes" @click="handleClick(recipe)" :class="{selected: currRecipe.recipe === recipe.recipe }" >{{ recipe.recipe.replace(/-/g, " ") }}</li>
  </ul>
</template>

<script>
export default {
    name: "RecipeList",
    props: ["recipes", "currRecipe", "handleClick"]
}
</script>

<style scoped>
  ul {
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-top: 2%;
  }

  li {
    list-style: none;
    padding: 1%;
    cursor: pointer;
    transition: opacity 0.25s;
  }

  li:hover {
    opacity: 0.6;
  }
  
  .selected {
    font-weight: 700;
    border-bottom: 1px solid #176f8a;
    color: #176f8a;
  }

  .selected:hover {
    opacity: 1;
  }
</style>