defmodule Server.Recipes.Recipe do
  use Ecto.Schema
  import Ecto.Changeset

  schema "recipes" do
    field :api_id, :integer
    belongs_to :user, Server.Users.User

    timestamps()
  end

  @doc false
  def changeset(recipe, attrs) do
    recipe
    |> cast(attrs, [:api_id, :user_id])
    |> validate_required([:api_id, :user_id])
  end
end
