import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactItem = ({item}) => {
    return (
        <Row className="item-box">
            <Col className="img-area" lg={2}>
                <img width={50} src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" alt=""/>
            </Col>
            <Col lg={10}>
                <h4>{item.name}</h4>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    )
}

export default ContactItem
