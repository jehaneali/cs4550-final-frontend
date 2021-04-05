defmodule ServerWeb.RecipeView do
  use ServerWeb, :view
  alias ServerWeb.RecipeView

  def render("index.json", %{recipes: recipes}) do
    %{data: render_many(recipes, RecipeView, "recipe.json")}
  end

  def render("show.json", %{recipe: recipe}) do
    %{data: render_one(recipe, RecipeView, "recipe.json")}
  end

  def render("recipe.json", %{recipe: recipe}) do
    %{id: recipe.id,
      api_id: recipe.api_id,
      user_id: recipe.user_id}
  end
end
