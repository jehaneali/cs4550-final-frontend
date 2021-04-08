defmodule Server.Repo.Migrations.CreateSearches do
  use Ecto.Migration

  def change do
    create table(:searches) do
      add :type, :string
      add :params, :string

      timestamps()
    end

  end
end
