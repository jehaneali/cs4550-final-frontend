#!/bin/bash

export SECRET_KEY_BASE=F9dWcxUN9pCxRsyHZ23PSHhNcSwg5WliyjZvRIalPXFJSyZrKNniJ61/ex/51TDB
export MIX_ENV=prod
export PORT=4710
export NODEBIN=`pwd`/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"
export DATABASE_URL=ecto://kitchen:bad@localhost/server_dev

echo "Building..."

mix deps.get --only prod
mix compile
export SECRET_KEY_BASE=F9dWcxUN9pCxRsyHZ23PSHhNcSwg5WliyjZvRIalPXFJSyZrKNniJ61/ex/51TDB
export DATABASE_URL=ecto://kitchen:postgres@localhost/server_dev
# todo maybe change that 
mix ecto.create
mix ecto.migrate
# (cd assets && npm install)
(cd assets && webpack --mode production)
mix phx.digest



#mix ecto.create


echo "Generating release..."
mix release

#echo "Stopping old copy of app, if any..."
#_build/prod/rel/practice/bin/practice stop || true

echo "Starting app..."

#PROD=t ./start.shgigi@