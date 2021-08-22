import { gql } from '@apollo/client';
import {cache} from "../apollo/cache";
import {client} from "../apollo/client";

export const GET_PRODUCT = gql`
            query getProduct ($id: String) {
                getProduct(id: $id) {
                    name
                    price
                    crossedPrice
                    category
                }
            }`
;

// const { product } = client.readQuery({
//     query: GET_PRODUCT,
//     variables: {
//         id: "dsdsds",
//     },
// });

export const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            name
            price
            crossedPrice
            category
        }
    }
`;