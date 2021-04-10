defmodule ServerWeb.SearchView do
  use ServerWeb, :view
  alias ServerWeb.SearchView

  def render("index.json", %{searches: searches}) do
    %{data: render_many(searches, SearchView, "search.json")}
  end

  def render("show.json", %{search: search}) do
    %{data: render_one(search, SearchView, "search.json")}
  end

  # def lookup(search) do
  #   cond do
  #     String.match?(search, "meal_name") -> "/search.php?s="
  #     true -> "/filter.php?i="
  #   end
  # end

  def render("search.json", %{search: search}) do
    # l = lookup({search.type})
    param2 = String.replace(search.params, " ", "_")
    api_key = Application.fetch_env!(:server, :api_key)
    resp =
      HTTPoison.get!(
        "https://www.themealdb.com/api/json/v2/#{api_key}/search.php?s=#{param2}"
      )
    data = Jason.decode!(resp.body)
    if (data["meals"] != nil) do
      %{identification: search.id,
      r: hd(data["meals"])}
    else
      %{identification: search.id,
      r: ""}
    end
  end

end
