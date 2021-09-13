import { Entity } from './entity.interface';
export interface Country extends Entity {
    name: string,
    code: string,
    currencyCode: string
}
