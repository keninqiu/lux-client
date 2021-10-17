import { Entity } from './entity.interface';
import { Translate } from './translate.interface';
export interface State extends Entity {
    name: string,
    namet: Translate,
    code: string,
    type: string,
    location: string,
    country: string
}
