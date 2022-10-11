import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { MODEL_CLOSE_SEC } from './config.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    // ! Getting the Hash from url
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // ! 0). Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // ! 1). Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // ! 2). Loading Recipe
    await model.loadRecipe(id);

    // ! 3). Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // ! 1). Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // ! 2). Load search results
    await model.loadSearchResults(query);

    // ! 3). Render Results.
    resultsView.render(model.getSearchResultsPage());

    // ! 4). Render initial Pagination Buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (gotToPage) {
  // ! 3). Render new Results.
  resultsView.render(model.getSearchResultsPage(gotToPage));

  // ! 4). Render new Pagination Buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // ! Update recipe servings (in state)
  model.updateServings(newServings);

  // ! Update the recipe View
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // ! Add or remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  }

  // ! Update recipe view
  recipeView.update(model.state.recipe);

  // ! Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // ! Show loading Spinner
    addRecipeView.renderSpinner();

    // ! Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // ! Render Recipe
    recipeView.render(model.state.recipe);

    // ! Render Success Message
    addRecipeView.renderMessage();

    // ! Render Bookmark View
    bookmarksView.render(model.state.bookmarks);

    // ! Change ID in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // ! Close Form Window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error('🐞', error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  // ! Subscriber
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
