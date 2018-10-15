import Vue from "vue";
import Vuex from "vuex";
import recipes from "../constants/recipes";

let recipeList;
const lsRecipes = localStorage.getItem("recipes");
if (!lsRecipes || JSON.parse(lsRecipes).length === 0) {
  recipeList = recipes;
  localStorage.setItem("recipes", JSON.stringify(recipes));
} else if (JSON.parse(lsRecipes).length > 0) {
  recipeList = JSON.parse(lsRecipes);
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: recipeList,
    currRecipe: recipeList[0]
  },
  getters: {
    recipes: state => state.recipes,
    currRecipe: state => state.currRecipe
  },
  mutations: {
    deleteRecipe: (state, payload) => {
      state.recipes = [...state.recipes.slice(0, payload.id), ...state.recipes.slice(payload.id + 1)];
    },
    addRecipe: (state, payload) => {
      state.recipes = [...state.recipes, payload.recipe];
    },
    submitRecipe: (state, payload) => {
      state.recipes = [...state.recipes.slice(0, payload.id), payload.recipe, ...state.recipes.slice(payload.id + 1)];
    },
    setRecipe: (state, payload) => {
      state.currRecipe = payload.recipe;
    }
  }
});
