import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {camerasDataProcess} from './cameras-data-process/cameras-data-process';

export const rootReducer = combineReducers({
  [NameSpace.CamerasData]: camerasDataProcess.reducer,
});
