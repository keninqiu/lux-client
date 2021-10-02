import { Entity } from './entity.interface';
export interface Category extends Entity {
    name: string,
    type: string,
    country: string,
    popular: number;
}
