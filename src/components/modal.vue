<template>
  <div class="modal">
    <div class="modal__body">
      <label for="recipe">Recipe Name</label>
      <input v-model="name" id="recipe" name="recipe" type="text" placeholder="Recipe Name" />
      <label for="ingredients">Ingredients</label>
      <textarea v-model="ings" id="ingredients"  name="ingredients" placeholder="Separate each ingredient with a '\\': \n\nMilk \\ 2 Eggs \\ 1/3 Cup Sugar"></textarea>
      <label for="directions">Directions</label>
      <textarea v-model="dirs" id="directions"  name="directions" placeholder="Separate each step with a '\\': \n\nPreheat over to 350°F \\ Combine ingredients in pie crust \\ Bake until crust is golden brown"></textarea>
      <div class="modal__body__footer">
        <button @click="toggleModal(false)">CANCEL</button>
        <button type="submit" style="color: #fff" :disabled="!name || !ings || !dirs" @click="type === 'add' ? handleSubmit({recipe: name, ingredients: ings.split(' \\ '), directions: dirs.split(' \\\n\n')}) : handleSubmit({recipe: name, ingredients: ings.split(' \\ '), directions: dirs.split(' \\\n\n')}, id)" >{{ type === "add" ? "ADD" : "SAVE" }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Modal",
    props: ["toggleModal", "handleSubmit", "currRecipe", "type", "id"],
    data() {
      return {
        name: "",
        ings: "",
        dirs: ""
        }
    },
    mounted() {
      if (this.type === "edit") {
        this.name = this.currRecipe.recipe.replace(/-/g, " ");
        this.ings = this.currRecipe.ingredients.join(" \\ ");
        this.dirs = this.currRecipe.directions.join(" \\\n\n");
      }
    }
}
</script>
<style scoped>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal__body {
    height: 50vh;
    width: 30%;
    border: 1px solid #bbb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
  }

  .modal__body input {
    width: 90%;
    height: 5%;
    padding: 1% 0;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #aaa;
  }
    .modal__body textarea {
    width: 90%;
    padding: 1% 0;
    resize: none;
    height: 15%;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #aaa;
  }

  .modal__body label {
    align-self: flex-start;
    margin: 3% 0;
    margin-left: 4.5%;
  }

  .modal__body__footer {
    display: flex;
    align-self: flex-end;
    margin-right: 4.5%;
    margin-top: 5%;
    width: 30%;
    height: 5vh;
    justify-content: space-between;
  }

  .modal__body button {
    border: 0;
    outline: 0;
    border-radius: 2px;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.25s;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);;
  }

  .modal__body button[type="submit"] {
    background-color: #176f8a;
    border: 1px solid #176f8f;
  }

  .modal__body button[disabled] {
    background-color: #aaa;
    cursor: default;
    border: 1px solid #bbb;
  }

  .modal__body button[disabled]:hover {
    opacity: 1;
  }

  .modal__body button:hover {
    opacity: 0.7;
  }
</style>