import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function photo_path(post) {
  return "http://localhost:4000/photos/" + post.photo_hash;
}

function Post({ post }) {
  return (
    <Col md="3">
      <Card>
        <Card.Img variant="top" src={photo_path(post)} />
        <Card.Text>
          Posted by {post.user.name} <br />
          {post.body}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Home({ posts, session }) {
  let cards = posts.map((post) => (
    <Post post={post} key={post.id} />
  ));

  // let new_link = null;
  // if (session) {
  //   new_link = (
  //     <p><Link to="/posts/new">New Post</Link></p>
  //   )
  // }

  return (
    <div>
      <Row>
        <h1>Kitchen Island</h1>
        <Row>{cards}</Row>
      </Row>
      <Row>
        <h3 style={{ color: "#fc5d35" }}>Featured Recipes</h3> <br></br>
      </Row>
      <hr></hr>
      <Row>
        <h4>April Recipe of the Month: White chocolate creme brulee </h4><h5 style={{ color: "#fc5d35" }}></h5>
      </Row>
      <Row>
        <Col>
          <h5 style={{ color: "#fc5d35" }}> Ingredients</h5>
          <p>586ml Double Cream</p>
          <p>100g White Chocolate Chips</p>
          <p>Pod of Vanilla</p>
          <p>6 Egg Yolks</p>
          <p>2 tbs Caster Sugar</p>
          <p>Top Caster Sugar</p>
        </Col>
        <Col>
          <img src={'https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg'} width={'300px'} />
        </Col>
      </Row>
     <h5 style={{ color: "#fc5d35" }}> Instructions</h5>
      <p>
        Heat the cream, chocolate and vanilla pod in a pan until the chocolate has melted.
        Take off the heat and allow to infuse for 10 mins, scraping the pod seeds into the cream.
        If using the vanilla extract, add straight away.
        Heat oven to 160C/fan 140C/gas 3.
        Beat yolks and sugar until pale.
        stir in the chocolate cream.
        Strain into a jug and pour into ramekins.
        Place in a deep roasting tray and pour boiling water halfway up the sides.
        Bake for 15-20 mins until just set with a wobbly centre.
        Chill in the fridge for at least 4 hrs.
        To serve, sprinkle some sugar on top of the brûlées and caramelise with a blowtorch or briefly under a hot grill.
        Leave caramel to harden, then serve.
      </p>
      <hr></hr>
      <Row>
        <h4>March Recipe of the Month: Spicy Arrabiata Penne </h4><h5 style={{ color: "#fc5d35" }}></h5>
      </Row>
      <Row>
        <Col>
          <h5 style={{ color: "#fc5d35" }}> Ingredients</h5>
          <p>1 pound penne rigate</p>
          <p>1/4 cup olive oil</p>
          <p>3 cloves garlic</p>
          <p>1 tin chopped tomatoes</p>
          <p>1/2 teaspoon red chile flakes</p>
          <p>1/2 teaspoon italian seasoning</p>
          <p>6 leaves basil</p>
          <p>sprinkling Parmigiano-Reggiano</p>
        </Col>
        <Col>
          <img src={'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'} width={'300px'} />
        </Col>
      </Row>
      <h5 style={{ color: "#fc5d35" }}> Instructions</h5>
      <p>
        Bring a large pot of water to a boil.
        Add kosher salt to the boiling water, then add the pasta.
        Cook according to the package instructions, about 9 minutes.
        In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer.
        Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.
        Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste.
        Bring to a boil and cook for 5 minutes.
        Remove from the heat and add the chopped basil.
        Drain the pasta and add it to the sauce.
        Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.
      </p>
    </div>
  );
}

export default connect(
  ({ posts, session }) => ({ posts, session }))(Home);