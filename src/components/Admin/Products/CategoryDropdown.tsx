import React, {FC} from 'react';
import {Dropdown} from "react-bootstrap";

const CategoryDropdown: FC = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-center">
        <Dropdown.Item>Category 1</Dropdown.Item>
        <Dropdown.Item>Category 2</Dropdown.Item>
        <Dropdown.Item>Category 3</Dropdown.Item>
        <Dropdown.Item>Category 4</Dropdown.Item>
        <Dropdown.Item>Category 5</Dropdown.Item>
        <Dropdown.Item>Category 6</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryDropdown;