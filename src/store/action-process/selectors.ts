import {NameSpace, SortType, SortOrder} from '../../const';
import {State} from '../../types/state';

export const getSortType = (state: State): SortType => state[NameSpace.Action].sortType;
export const getSortOrder = (state: State): SortOrder => state[NameSpace.Action].sortOrder;

