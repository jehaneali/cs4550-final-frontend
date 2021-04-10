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
alias Server.Searches.Search

defmodule Inject do
  def user(name, pass) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, password_hash: hash, cooking: -1})
  end

  def rep(id, user_id) do
    Repo.insert!(%Recipe{api_id: id, user_id: user_id})
  end

  def search(type, params) do
    Repo.insert!(%Search{type: type, params: params})
  end
end

abby = Inject.user("Abby", "12345678")
tanya = Inject.user("Tanya", "87654321")
kia = Inject.user("Kia", "rodeotime")
gigi = Inject.user("Gigi", "itsgravy")
_p1 = Inject.rep(52779,gigi.id)
_p1 = Inject.rep(52833,gigi.id)
_p1 = Inject.rep(52900,gigi.id)
_p1 = Inject.rep(52833,gigi.id)
_p1 = Inject.rep(53015,gigi.id)
_p4 = Inject.rep(52862,gigi.id)
_s1 = Inject.search("meal_name", "Honey Balsamic Chicken with Crispy Broccoli & Potatoes")
_s2 = Inject.search("meal_name", "French Onion Chicken with Roasted Carrots & Mashed Potatoes")
_s3 = Inject.search("meal_name", "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini")
_s5 = Inject.search("meal_name", "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots")
