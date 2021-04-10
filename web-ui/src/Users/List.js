import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function User({ user, session }) {
  if (session != null) {
    if (user.id != session.user_id) {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>
            <Button variant="primary" type="submit">
              {/* FIXME : how to change this depending on whether following or not? */}
            Follow
          </Button>
          </td>
        </tr>
      );
    }
    else {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td></td>
        </tr>
      );
    }
  }
  else {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td></td>
      </tr>
    );
  }
}

function UsersList({ users, session }) {
  let rows = users.map((user) => (
    <User user={user} session={session}></User>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>List Users</h2>
          <p>
            <Link to="/users/new">
              New User
            </Link>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );

}

function state2props({ users, user_form, session }) {
  return { users, user_form, session };
}

export default connect(state2props)(UsersList);