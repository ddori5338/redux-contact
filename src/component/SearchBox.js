import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch} from 'react-redux';

const SearchBox = () => {
    const [searchName, setSearchName] = useState('');
    const dispatch = useDispatch();
    const search = () => {
        dispatch({type: "SEARCH", payload: {searchName}});
    }
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력해주세요"  onChange={(event) => setSearchName(event.target.value)}/>
            </Col>
            <Col lg={2}>
                <Button onClick={search}>찾기</Button>
            </Col>
        </Row>
    )
}

export default SearchBox
