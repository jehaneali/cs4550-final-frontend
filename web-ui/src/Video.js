import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Video({ session }) {
    return (
        <div>
            <h2> Link to Kia's video chat will go here </h2>
        </div>
    );
}

export default connect(
    ({ session }) => ({ session }))(Video);