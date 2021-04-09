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

  let new_link = null;
  if (session) {
    new_link = (
      <p><Link to="/posts/new">New Post</Link></p>
    )
  }

  return (
    <div>
      <Row>
        <h2>Home</h2>
        {new_link}
        <Row>{cards}</Row>
      </Row>
      <Row>
        <h4 style={{color: "#fc5d35"}}>Latest Recipes</h4>
      </Row>

    </div>
  );
}

export default connect(
  ({ posts, session }) => ({ posts, session }))(Home);