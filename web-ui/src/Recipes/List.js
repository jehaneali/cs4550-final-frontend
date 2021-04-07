import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function RecipesList({recipes}) {
    let rows = recipes.map((recipe) => (
      <tr key={recipe.id}>
        <td>{recipe.api_id}</td>
        <td>{recipe.rep["strMeal"]}</td>
            <td>
                <Button variant="primary" type="submit">
            {/* FIXME : implement saving  */}
            {/* onclick=function(recipe.api_id) */}
            Save
          </Button>
            </td>
        </tr>
    ));

{/* <div class="row">
  <%= for event <- @events do %>
    <div class="col-sm-4 card">
        <h3 class="card-title"><%= event.name %> </h3>
        <h6 class="card-title">Hosted by: <%= event.usr.name %></h6>
        <h6 class="card-title">Date: <%= event.when %> </h6>
        <p class="card-body"><%= event.description %></p>
          <%=link "view", to: Routes.event_path(@conn, :show, event) %>
    </div>
  <% end %>
</div> */}

return (
    <div>
      <Row>
        <Col>
          <h2>Search Results</h2>
          <p>
            <Link to="/recipes">
              Go back to search
            </Link>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Save</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );

}

function state2props({recipes, recipe_form}) {
  return { recipes, recipe_form };
}

export default connect(state2props)(RecipesList);