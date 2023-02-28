import mockCamera from './mock-camera';
import {Camera} from '../types/camera';

const mockCameras = (): Camera[] => new Array(5).fill(null).map(() => mockCamera());

export default mockCameras;
