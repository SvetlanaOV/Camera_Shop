import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Camera} from '../../types/camera';

export const getCameras = (state: State): Camera[] => state[NameSpace.CamerasData].cameras;
