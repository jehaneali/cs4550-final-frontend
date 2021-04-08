import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import UsersList from './Users/List';
import UsersNew from './Users/New';
import PostsNew from './Posts/New';
import RecipeSearch from './Recipes/Search'
import RecipesList from './Recipes/List'
import Home from './Home';
import Video from './Video';

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
        <Route path="/video" exact>
          <Video />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;