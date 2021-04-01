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

defmodule Inject do
  def user(name, pass) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, password_hash: hash})
  end
end

sam = Inject.user("Sam", "test1")
samantha = Inject.user("Samantha", "test2")
