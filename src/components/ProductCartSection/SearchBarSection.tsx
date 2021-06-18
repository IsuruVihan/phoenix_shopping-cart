import React  from 'react';
import {Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import * as Icon from "react-feather";


const SearchBarSection: React.FC = () => {
    return (
        <Row className="search-bar-section justify-content-center py-4 my-3">
                <FormControl type="text" placeholder="Search..." className="search-bar my-1 py-0 pl-4"/>
                <Row className="search-icon py-1 px-0">
                    <Icon.Search color="gray"/>
                </Row>
        </Row>
    )
}

export default SearchBarSection;
