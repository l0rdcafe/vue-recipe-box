<template>
  <div id="app">
    <header-nav :handleModal="toggleModal" />
    <recipe-list :recipes="recipes" :currRecipe="currRecipe.recipe ? currRecipe : JSON.parse(currRecipe)" :handleClick="setRecipe"/>
    <recipe-view :currRecipe="currRecipe.recipe ? currRecipe : JSON.parse(currRecipe)" :handleDelete="deleteRecipe" :handleModal="toggleModal"/>
    <modal v-if="modal" :type="type" :toggleModal="toggleModal" :id="type === 'edit' ? recipes.findIndex(r => r.recipe === currRecipe.recipe) : ''" :handleSubmit="type === 'edit' ? submitRecipe : addRecipe" :currRecipe="currRecipe" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderNav from "./components/header";
import RecipeList from "./components/recipe-list";
import RecipeView from "./components/recipe-view";
import Modal from "./components/modal";

export default {
  name: 'App',
  components: {
    HeaderNav,
    RecipeList,
    RecipeView,
    Modal
  },
  data() {
    return {
      modal: false,
      type: null
    }
  },
  computed: {
    ...mapState([
      "recipes",
      "currRecipe"
    ])
  },
  methods: {
    addRecipe(recipe) {
      this.$store.commit("addRecipe", {
        recipe
      });
      this.setRecipe(recipe);
      this.toggleModal(false);
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    },
    deleteRecipe(name) {
      const id = this.recipes.findIndex(r => r.recipe === name);
      let newRecipe;
      this.$store.commit("deleteRecipe", {
        id
      });

      if (this.recipes.length >= 1) {
        if (id !== 0) {
          newRecipe = this.recipes[id - 1];
        } else {
          newRecipe = this.recipes[0];
        }
      } else {
        newRecipe = {
          recipe: "No Recipe Found",
          ingredients: ["Please add a new recipe"],
          directions: ["Click the add button in the header to add a new recipe"]
        };
      }

      this.setRecipe(newRecipe);
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    },
    setRecipe(recipe) {
      this.$store.commit("setRecipe", {
        recipe
      });
    },
    submitRecipe(recipe, id) {
      console.log(recipe.recipe);
      this.$store.commit("submitRecipe", {
        recipe,
        id
      });
      this.setRecipe(recipe);
      this.toggleModal(false);
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    },
    toggleModal(open, type) {
      this.modal = open;
      this.type = type;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
