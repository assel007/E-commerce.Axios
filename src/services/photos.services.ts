import { api } from '../boot/axios';
import type { Photo } from '../types';

export const getPhotos = () => api.get<Photo[]>('/photos');
