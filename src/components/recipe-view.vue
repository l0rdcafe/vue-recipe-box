<template>
<div class="recipe-view">
    <h3>{{ currRecipe.recipe.replace(/-/g, " ").toUpperCase() }}</h3>
    <h4>Ingredients:</h4>
    <div v-if="currRecipe.recipe !== 'No Recipe Found'" class="icon-wrapper">
      <i class="fas fa-trash-alt fa-lg" @click="handleDelete(currRecipe.recipe)" />
      <i class="far fa-edit fa-lg" @click="handleModal(true, 'edit')" />
    </div>
    <ul>
        <li v-for="ing in currRecipe.ingredients">
            {{ ing }}
        </li>
    </ul>
    <h4>Directions:</h4>
    <ol>
        <li v-for="dir in currRecipe.directions">
            {{ dir }}
        </li>
    </ol>
</div>
</template>
<script>
export default {
    name: "RecipeView",
    props: ["currRecipe", "handleDelete", "handleModal"]
}
</script>
<style scoped>

.recipe-view {
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    padding: 0 5%;
}

h3 {
    margin-bottom: 0;
}

h4 {
    align-self: flex-start;
    margin: 2% 0;
}

ul {
    margin: 0;
    padding-left: 1.75%;
    align-self: flex-start;
}

ol {
    margin-bottom: 3%;
    margin: 0;
    padding-left: 2%;
    align-self: flex-start;
}

ol li {
  margin: 2% 0;
}

ol li:first-of-type {
  margin: 0;
}

.icon-wrapper {
  align-self: flex-end;
  width: 6.5%;
  display: flex;
  justify-content: space-between;
}

i {
  color: #176f8a;
  cursor: pointer;
  transition: opacity 0.25s;
}

i:hover {
  opacity: 0.7;
}
</style>