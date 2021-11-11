import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";


type CategoryItemProps = {
  image: string,
  name: string,
  selectedCategory: string,
  setSelectedCategory: (name: string) => void
}

const CategoryItem = (props: CategoryItemProps) => {
  return (
    // <Col className="category-cont justify-content-center px-0 py-2">
    <Container
      className={"category-cont justify-content-center mx-lg-2 mx-1 px-0 py-4 " + (props.selectedCategory === props.name && "selected")}>
      <Row className="text-center">
        <Col id={props.name} onClick={() => {
          props.setSelectedCategory(props.name)
        }}>
          <Image src={props.image}
                 width="50%"
                 height="auto"
                 className="cat-img"
          />
        </Col>
      </Row>
      <Row className="text-center py-2">
        <Col className="category-name"><label>{props.name}</label> </Col>
      </Row>
    </Container>
  )
}

export default CategoryItem;
