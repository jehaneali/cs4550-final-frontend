import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { create_post, fetch_posts } from '../api';

export default function RecipeSearch() {
  let history = useHistory();
  let [post, setPost] = useState({});

  function submit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    create_post(post).then((resp) => {
      if (resp["errors"]) {
        console.log("errors", resp.errors);
      }
      else {
        history.push("/");
        fetch_posts();
      }
    });
  }

  function updatePhoto(ev) {
    let p1 = Object.assign({}, post);
    p1["photo"] = ev.target.files[0];
    setPost(p1);
  }

  function updateBody(ev) {
    let p1 = Object.assign({}, post);
    p1["body"] = ev.target.value;
    setPost(p1);
  }

  return (
    <Row>
      <Col>
        <h2>Recipe Search</h2>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Enter the name of the recipe you're looking for!</Form.Label>
            <Form.Control type="text"
                          onChange={updateBody}
                          value={post.body} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
}