defmodule ServerWeb.SearchView do
  use ServerWeb, :view
  alias ServerWeb.SearchView

  def render("index.json", %{searches: searches}) do
    %{data: render_many(searches, SearchView, "search.json")}
  end

  def render("show.json", %{search: search}) do
    %{data: render_one(search, SearchView, "search.json")}
  end

  def render("search.json", %{search: search}) do
    lookup = ""
    if search.type == "meal_name" do
      lookup = "/search.php?s="
    else
      lookup = "/filter.php?i="
    end
    api_key = Application.fetch_env!(:server, :api_key)
    resp =
      HTTPoison.get!(
        "https://www.themealdb.com/api/json/v2/#{api_key}#{lookup}#{search.params}"
      )
    data = Jason.decode!(resp.body)
    %{id: search.id, results: data}
  end
end
