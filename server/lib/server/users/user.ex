defmodule Server.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

    schema "users" do
    field :name, :string
    field :password_hash, :string
    field :cooking, :integer
    has_many :recipes, Server.Recipes.Recipe

    timestamps()
  end

  @password_opts [
  length: [min: 8, max: 30, messages: [too_short: "Password is too short!"]],
  character_set: [
    lower_case: 5,  # at least five lower case letters
    upper_case: [1, :infinity], # at least one upper case letter
    numbers: [1, 4],  # from 1 to 4 number characters
    special: [0, 0],  # no special characters allowed
  ]
]


  @doc false
  def changeset(user, attrs \\ %{}) do
    password = attrs["password"]
    Map.put(attrs, "cooking", -1)
    user
    |> cast(attrs, [:name, :cooking])
    # |> PasswordValidator.validate("trying3T", @password_opts)
    |> add_password_hash(attrs["password"])
    |> validate_required([:name, :cooking, :password_hash])
  end

  def add_password_hash(cset, nil) do
    cset
  end

  def add_password_hash(cset, password) do
    change(cset, Argon2.add_hash(password))
  end
end
