import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import UsersList from './Users/List';
import UsersNew from './Users/New';
import PostsNew from './Posts/New';
import RecipeSearch from './Recipes/Search'
import RecipeShow from './Recipes/Show'
import RecipesList from './Recipes/List'
import Home from './Home';
import Video from './Video';
import ShowProfile from './Profile/Profile';

function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts/new" exact>
          <PostsNew />
        </Route>
        <Route path="/users" exact>
          <UsersList />
        </Route>
        <Route path="/users/new" exact>
          <UsersNew />
        </Route>
        <Route path="/recipes" exact>
          <RecipeSearch />
        </Route>
        <Route path="/recipes/results" exact>
          <RecipesList />
        </Route>
        <Route path="/recipes/show" exact>
          <RecipeShow />
        </Route>
        <Route path="/video" exact>
          <Video />
        </Route>
        <Route path="/profile" exact>
          <ShowProfile />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;