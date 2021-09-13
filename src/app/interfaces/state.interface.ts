import { Entity } from './entity.interface';
export interface State extends Entity {
    name: string,
    code: string,
    type: string,
    location: string,
    country: string
}
