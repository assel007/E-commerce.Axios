import { api } from '../boot/axios';
import type { User } from '../types';

export const getUsers = () => api.get<User[]>('/users');
