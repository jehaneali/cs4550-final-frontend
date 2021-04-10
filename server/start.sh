export MIX_ENV=prod
export PORT=4710
export NODEBIN='pwd'/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"
export DATABASE_URL=ecto://kitchen:postgres@localhost/server_dev
# TODO change this
_build/prod/rel/server/bin/server start