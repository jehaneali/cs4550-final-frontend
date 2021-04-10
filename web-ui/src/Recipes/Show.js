import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let id = 1;

// export function set_id(num) {
//     id = num;
// }

function Rep({ recipe }) {
    if (recipe.id == 1) {
        return (
            <div>
                <h2>{recipe.rep["strMeal"]} <div class="text-center"> <Button variant="primary"> Remove this recipe!</Button></div> </h2>
                <hr></hr>
                <h4>Ingredients</h4>
                <p>{recipe.rep["strMeasure1"]} {recipe.rep["strIngredient1"]}</p>
                <p>{recipe.rep["strMeasure2"]} {recipe.rep["strIngredient2"]}</p>
                <p>{recipe.rep["strMeasure3"]} {recipe.rep["strIngredient3"]}</p>
                <p>{recipe.rep["strMeasure4"]} {recipe.rep["strIngredient4"]}</p>
                <p>{recipe.rep["strMeasure5"]} {recipe.rep["strIngredient5"]}</p>
                <p>{recipe.rep["strMeasure6"]} {recipe.rep["strIngredient6"]}</p>
                <p>{recipe.rep["strMeasure7"]} {recipe.rep["strIngredient7"]}</p>
                <p>{recipe.rep["strMeasure8"]} {recipe.rep["strIngredient8"]}</p>
                <p>{recipe.rep["strMeasure9"]} {recipe.rep["strIngredient9"]}</p>
                <p>{recipe.rep["strMeasure10"]} {recipe.rep["strIngredient10"]}</p>
                <p>{recipe.rep["strMeasure11"]} {recipe.rep["strIngredient11"]}</p>
                <p>{recipe.rep["strMeasure12"]} {recipe.rep["strIngredient12"]}</p>
                <p>{recipe.rep["strMeasure13"]} {recipe.rep["strIngredient13"]}</p>
                <p>{recipe.rep["strMeasure14"]} {recipe.rep["strIngredient14"]}</p>
                <p>{recipe.rep["strMeasure15"]} {recipe.rep["strIngredient15"]}</p>
                <p>{recipe.rep["strMeasure16"]} {recipe.rep["strIngredient16"]}</p>
                <p>{recipe.rep["strMeasure17"]} {recipe.rep["strIngredient17"]}</p>
                <p>{recipe.rep["strMeasure18"]} {recipe.rep["strIngredient18"]}</p>
                <p>{recipe.rep["strMeasure19"]} {recipe.rep["strIngredient19"]}</p>
                <p>{recipe.rep["strMeasure20"]} {recipe.rep["strIngredient20"]}</p>
                <br/>
                <h4>Instructions</h4>
                {recipe.rep["strInstructions"]}
            </div>
        )
    }
    else {
        return null;
    }
}

function RecipeShow({ recipes }) {
    let cards = recipes.map((recipe) => (
        <Rep recipe={recipe} />
    ));

    return (
       <div class="card-deck">{cards}</div>
    );
}

function state2props({ recipes }) {
    return { recipes };
}

export default connect(state2props)(RecipeShow);