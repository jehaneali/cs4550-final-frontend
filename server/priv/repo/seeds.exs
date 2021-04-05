# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Server.Repo.insert!(%Server.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Server.Repo
alias Server.Users.User
alias Server.Recipes.Recipe

defmodule Inject do
  def user(name, pass) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, password_hash: hash, cooking: -1})
  end

  def rep(id, user_id) do
    Repo.insert!(%Recipe{api_id: id, user_id: user_id})
  end
end

sam = Inject.user("Sam", "test1")
samantha = Inject.user("Samantha", "test2")
soup = Inject.rep(53047,sam.id)
stew = Inject.rep(53045,sam.id)
sardines = Inject.rep(53041,samantha.id)
