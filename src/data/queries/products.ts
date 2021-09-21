import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
            query getProduct ($id: String) {
                product(id: $id) {
                    name
                    price
                    crossedPrice
                    category
                }
            }`
;

export const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            _id
            name
            imagUrl
            price
            crossedPrice
            category
        }
    }
`;