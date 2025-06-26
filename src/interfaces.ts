export interface ICartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface IPizza {
    _id: string;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
}
