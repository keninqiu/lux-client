import { Entity } from './entity.interface';
export interface Survey extends Entity {
    type: string,
    user: string
}