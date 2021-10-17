import { Entity } from './entity.interface';
import { State } from './state.interface';
import { Translate } from './translate.interface';
export interface City extends Entity {
    name: string,
    code: string,
    state: State,
    namet: Translate
}
