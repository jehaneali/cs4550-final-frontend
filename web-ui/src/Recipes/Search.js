import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import pick from 'lodash/pick';

import { create_search, fetch_searches } from '../api';

function RecipeSearch() {
  let history = useHistory();
  const [search, setSearch] = useState({
    type: "meal_name", params: ""
  });

  function submit(ev) {
    ev.preventDefault();
    // console.log(ev);
    // console.log(search);

    let data = pick(search, ['type', 'params']);
    create_search(data).then(() => {
      fetch_searches();
      history.push("/recipes/results");
    });
  }

  function update(field, ev) {
    let u1 = Object.assign({}, search);
    u1.params = ev.target.value;
    setSearch(u1);
  }

  return (
    <Row>
      <Col>
        <h1>Recipe Search</h1>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Enter the name of the recipe you're looking for!</Form.Label>
            <Form.Control type="text"
              onChange={
                (ev) => update("name", ev)}
                          value={search.params} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

function state2props(_state) {
  return {};
}

export default connect(state2props)(RecipeSearch);