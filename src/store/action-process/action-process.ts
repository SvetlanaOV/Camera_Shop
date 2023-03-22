import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortType, SortOrder} from '../../const';
import {ActionProcess} from '../../types/state';

const initialState: ActionProcess = {
  sortType: SortType.Default,
  sortOrder: SortOrder.Ascending,
};

export const actionProcess = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    changeSortDirection: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {changeSortType, changeSortDirection: changeOrderType} = actionProcess.actions;
