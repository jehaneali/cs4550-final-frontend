defmodule Server.Searches.Search do
  use Ecto.Schema
  import Ecto.Changeset

  schema "searches" do
    field :params, :string
    field :type, :string

    timestamps()
  end

  @doc false
  def changeset(search, attrs) do
    search
    |> cast(attrs, [:type, :params])
    |> validate_required([:type, :params])
  end
end
