import { Entity } from './entity.interface';
export interface Popular extends Entity {
    type: string,
    country: string,
    rawData: any
}
