import React from 'react';
import {FormControl, Row} from "react-bootstrap";
import * as Icon from "react-feather";

const SearchBarSection: React.FC = () => {
    return (
        <Row xs={12} className="search-bar-section justify-content-center py-4 my-3">
                <FormControl type="text" placeholder="Search..." className="search-bar my-1 py-0 pl-4"/>
                <Row className="search-icon py-1 px-0">
                    <Icon.Search color="gray"/>
                </Row>
        </Row>
    )
}

export default SearchBarSection;