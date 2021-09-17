import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
    mutation addProduct($input: InputProduct!) {
        addProduct(input: $input) {
            _id
            name
            imagUrl
            crossedPrice
            price
            category
        }
    }`
;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($deleteProductId: String!) {
        deleteProduct(id: $deleteProductId) {
            name
            imagUrl
            crossedPrice
            price
            category
        }
    }`
;