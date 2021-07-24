export interface User {
    name: string,
    email: string,
    mobile: string,
    password: string,
    address: Address | null
}

export interface Address {
    street: string,
    postalCode: number,
    country: string,
}