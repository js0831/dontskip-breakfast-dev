export interface Menu {
    _id?: string;
    name: string;
    description: string;
    price: number;
    photo: string;
    foods?: Food[];
}

export interface Food {
    _id?: string;
    name: string;
    price?: number;
    photo: string;
    addon: boolean;
    variants: Variant[];
}

export interface Variant {
    _id?: string;
    name: string;
    additional?: number;
}
