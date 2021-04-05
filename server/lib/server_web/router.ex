defmodule ServerWeb.Router do
  use ServerWeb, :router

  pipeline :browser do
    plug CORSPlug
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug CORSPlug
    plug :accepts, ["json"]
  end

  scope "/", ServerWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api/v1", ServerWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
    resources "/recipes", RecipeController, except: [:new, :edit]
    resources "/session", SessionController, only: [:create]
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ServerWeb.Telemetry
    end
  end
end
