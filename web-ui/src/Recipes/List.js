import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeShow from './Show'

function RecipesList({ current_search }) {

  // let cards = current_search.results.map((recipe) => (
  //   <h5>{recipe["data"].id}</h5>
    // <div class="card-group">
    //   <div class="card" style={{ width: '18rem' }}>
    //     <img class="card-img-top" src={recipe.rep["strMealThumb"]}></img>
    //     {/* <h3 class="card-title">{recipe.id}</h3> */}
    //     <h4 class="text-center">{recipe.rep["strMeal"]}</h4>
    //     {/* <h6 class="card-title">{recipe.api_id}</h6> */}
    //     <div class="card-text" style={{ textAlign: 'center' }}>
    //       <div>Category: {recipe.rep["strCategory"]} </div> 
    //       <div>Cuisine: {recipe.rep["strArea"]} </div> </div>
    //     <br></br>
    //     <div class="text-center"><Button variant="secondary" onClick={RecipeShow}> View Recipe</Button> <Button variant="primary">Save Recipe</Button> </div>
    //     {/* <div class="text-center"><Button variant="primary">Save this recipe!</Button></div> */}
    //     <br></br>
    //   </div>
    // </div>
  // ));



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
      <div class="card-deck">{current_search.results}</div>
     
      {/* </tbody>
          </table> */}
      {/* </Col>
      </Row> */}
    </div>
  );

}

function state2props({ current_search }) {
  return { current_search };
}

export default connect(state2props)(RecipesList);