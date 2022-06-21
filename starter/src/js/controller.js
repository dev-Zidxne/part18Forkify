import * as model from './model.js';
import recipeViews from './views/recipeViews.js';
import 'core-js/stable';
import 'regenerator-runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeViews.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeViews.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// Easier way of listening to multiple events:
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// Old way individually
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
