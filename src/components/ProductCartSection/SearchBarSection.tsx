import React from 'react';
import {Col, FormControl, FormGroup, Row} from "react-bootstrap";
import * as Icon from "react-feather";

const SearchBarSection: React.FC = () => {
    return (
        <Row  className="search-bar-section justify-content-center py-4 my-3">
            <Col xs={10} sm={10} md={8} lg={6} className=" py-1 px-0">
                <FormGroup>
                        <Icon.Search color="gray" className="search-icon"/>
                        <FormControl type="text" placeholder="Search..." className="search-bar  my-1 py-2 ps-5"/>
                </FormGroup>
                </Col>
        </Row>
    )
}

export default SearchBarSection;