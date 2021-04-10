import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { set_id } from '../Recipes/Show';

function Rep({ recipe, session }) {
  if (session.user_id == recipe.user_id) {
    // set_id(recipe.id);
    return (
      <div class="card-group">
        <div class="card" style={{ width: '18rem' }}>
          <img class="card-img-top" src={recipe.rep["strMealThumb"]}></img>
          {/* <h3 class="card-title">{recipe.id}</h3> */}
          <h4 class="text-center">{recipe.rep["strMeal"]}</h4>
          {/* <h6 class="card-title">{recipe.api_id}</h6> */}
          <div class="card-text" style={{ textAlign: 'center' }}>
            <div>Category: {recipe.rep["strCategory"]} </div>
            <div>Cuisine: {recipe.rep["strArea"]} </div> </div>
          <br></br>
          <div class="text-center">
            {/* <Button variant="secondary" onClick={RecipeShow}> View Recipe</Button> */}
            <Link to="/recipes/show">
              View Recipe
            </Link>&nbsp;
            <Button variant="primary">Remove Recipe</Button> </div>
          {/* <div class="text-center"><Button variant="primary">Save this recipe!</Button></div> */}
          <br></br>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}

function ShowProfile({ recipes, session }) {

  let cards = recipes.map((recipe) => (
    <Rep recipe={recipe} session={session} />
  ));


  if (session == null) {
    return (
      <h3>Please Login!</h3>
    );
  }
  else {
    return (
      <div>
        {/* <Row>
        <Col> */}
        <Row> <h1> Welcome back to Kitchen Island, {session.name}! </h1> </Row>
        <hr></hr>
        <Row><h4 style={{ color: "#fc5d35" }}>My Saved Recipes</h4> </Row>

        {/* <table className="table table-striped">
            
            <tbody> */}
        <div class="card-deck">{cards}</div>

        {/* </tbody>
          </table> */}
        {/* </Col>
      </Row> */}
      </div>
    );
  }

}

function state2props({ recipes, recipe_form, session }) {
  return { recipes, recipe_form, session };
}

export default connect(state2props)(ShowProfile);