# defmodule ServerWeb.PageLive do
#   use ServerWeb, :live_view

#   alias Server.Presence
#   alias Server.PubSub

#   @presence "tutorial:presence"

#   @impl true
#   def mount(_params, session, socket) do
#     if connected?(socket) do
#       user = session["user"]

#       {:ok, _} = Presence.track(self(), @presence, user[:id], %{
#         name: user[:name],
#         joined_at: :os.system_time(:seconds)
#       })

#       Phoenix.PubSub.subscribe(PubSub, @presence)
#     end

#     {
#       :ok,
#       socket
#       |> assign(:current_user, session["user"])
#       |> assign(:users, %{})
#       |> handle_joins(Presence.list(@presence))
#     }
#   end

#     @impl true
#   def handle_info(%Phoenix.Socket.Broadcast{event: "presence_diff", payload: diff}, socket) do
#     {
#       :noreply,
#       socket
#       |> handle_leaves(diff.leaves)
#       |> handle_joins(diff.joins)
#     }
#   end

#   defp handle_joins(socket, joins) do
#     Enum.reduce(joins, socket, fn {user, %{metas: [meta| _]}}, socket ->
#       assign(socket, :users, Map.put(socket.assigns.users, user, meta))
#     end)
#   end

#   defp handle_leaves(socket, leaves) do
#     Enum.reduce(leaves, socket, fn {user, _}, socket ->
#       assign(socket, :users, Map.delete(socket.assigns.users, user))
#     end)
#   end
# end
