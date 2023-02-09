import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Promo} from '../../types/promo';

export const getPromo = (state: State): Promo => state[NameSpace.PromoData].promo;
