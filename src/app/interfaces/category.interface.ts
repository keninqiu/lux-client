import { Entity } from './entity.interface';
import { Country } from './country.interface';
import { Translate } from './translate.interface';
export interface Category extends Entity {
    name: string,
    type: string,
    country: Country,
    popular: number;
    namet: Translate;
}
