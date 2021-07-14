import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";

type productCardTypes = {
    categoryName : string
}

function ProductCardsSection (props:productCardTypes){

    const [previewSource,setPreviewSource] = useState<string | null>();
    const [fileInputState,setFileInputState] = useState('');

    const handleReceiptUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if(event.target.files){
            const file = event.target.files[0];
            previewFile(file);
        }
    }

    const previewFile = (file:Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if(reader.result){
                let convertResults = reader.result.toString();
                setPreviewSource(convertResults);
            }
        }
    }


    return (
        <Row className="mx-0 pt-4" >
            <Col xl={12} sm={12} xs={12} className="product-cards-selection  px-0">

                <Row className="ms-4">
                    <Col className="ms-2 ps-2">
                        <label className="cat-title">{props.categoryName}</label>
                    </Col>
                </Row>


                {  props.categoryName == 'Pharmacy' ?
                    <React.Fragment>
                        <Row className="text-center py-4">
                            <Col className="text-center">
                                <form>
                                    <input type="file" name="image"
                                           value={fileInputState}
                                           onChange={handleReceiptUpload}/>
                                </form>
                                {(previewSource) ? (
                                    <img
                                        className="py-4 "
                                        src={previewSource}
                                        alt="chosen"
                                        style={{height: '300px'}}
                                    />
                                ) : null}
                            </Col>
                        </Row>
                    </React.Fragment> : null
                }

                <Row className="mx-xl-4 mx-lg-4 mx-0">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>

                </Row>
            </Col>
        </Row>
    )
}

export default ProductCardsSection;