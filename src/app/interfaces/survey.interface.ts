import { Entity } from './entity.interface';
export interface Survey extends Entity {
    type: string,
    user: string,
    job: string,
    years: number,
    city: string,
    compensationType: string
}