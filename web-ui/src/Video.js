import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import pick from 'lodash/pick';

import { create_search, fetch_searches } from './api';

function Video() {
    const [roomID, setRoomID] = useState("");
    const [URL, setURL] = useState("https://webchat.kia.town/");

    let history = useHistory();
    const [search, setSearch] = useState({
        type: "meal_name", params: "",
    });

    function submit(ev) {
        ev.preventDefault();
        console.log(ev);
        console.log(search);

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

    function updateURL(input) {
        setRoomID(input.target.value);
        let fullURL = "https://webchat.kia.town/".concat(roomID);
        setURL(fullURL);
    }

    return (
        <Row>
            <Col>
                <h1>Video Chat </h1>
                <Form action={URL}>
                    <Form.Group>    
                        <Form.Label>Enter a video call ID, and you'll be taken to your call.</Form.Label>
                        <Form.Control type="text"
                            onChange={updateURL}
                            value={roomID} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Join Call
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

function state2props(_state) {
    return {};
}

export default connect(state2props)(Video);