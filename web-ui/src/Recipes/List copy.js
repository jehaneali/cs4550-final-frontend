import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeShow from './Show'

function Rec({ recipe }) {
  return (
  <div class="card-group">
    <div class="card" style={{ width: '18rem' }}>
      <img class="card-img-top" src={recipe.results["meals"]["strMealThumb"]}></img>
      {/* <h3 class="card-title">{recipe.id}</h3> */}
      <h4 class="text-center">{recipe.results["meals"]["strMeal"]}</h4>
      {/* <h6 class="card-title">{recipe.api_id}</h6> */}
      <div class="card-text">
        <div>This is a description of the recipe. I am typing filler text here. </div> </div>
      <br></br>
      <div class="text-center"><Button variant="secondary" onClick={RecipeShow}> View Recipe</Button> <Button variant="primary">Save Recipe</Button> </div>
      {/* <div class="text-center"><Button variant="primary">Save this recipe!</Button></div> */}
      <br></br>
    </div>
    </div>
  )
}

function RecipesList({ searches, session }) {

  let cards = searches.map((recipe) => (
    <Rec recipe={recipe} key={recipe.id} />
  ));



  return (
    <div>
      {/* <Row>
        <Col> */}
      <h2>Search Results</h2>
      <p>
        <Link to="/recipes">
          Go back to search
            </Link>
      </p>
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

export default connect(
  ({ searches, session }) => ({ searches, session }))(RecipesList);