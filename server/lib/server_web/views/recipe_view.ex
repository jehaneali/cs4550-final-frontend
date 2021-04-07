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
    api_key = Application.fetch_env!(:server, :api_key)
    resp =
      HTTPoison.get!(
        "https://www.themealdb.com/api/json/v2/#{api_key}/lookup.php?i=#{recipe.api_id}"
      )
    data = Jason.decode!(resp.body)
    %{id: recipe.id, api_id: recipe.api_id, user_id: recipe.user_id, rep: data["meals"]}
  end
end
