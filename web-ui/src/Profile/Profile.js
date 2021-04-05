import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetch_saves } from '../api';

function Save({ recipe }) {
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

function ShowProfile({ user, session }) {



  let cards = null
  if (session) {
    cards = reps.map((recipe) => (
      <Save recipe={recipe} key={recipe.id} />
    ));
  }

  return (
    <div>
      <h2>Hello, { user.name }!</h2>
      <Row>{cards}</Row>
    </div>
  );
}

export default connect(
  ({ user, session }) => ({ user, session }))(ShowProfile);
