export interface ICartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface IPizza {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
}