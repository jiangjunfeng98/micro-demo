import { axios } from '@app/base-core';
import { IDFromDTO, IDFromVO } from './type';

const BASE_URL = '/api/v1';

export const getDFromApi = (params: IDFromDTO): Promise<IDFromVO[]> => axios.get(`${BASE_URL}/from/search`, { params });

export const saveDFromApi = () => axios.post(`${BASE_URL}/form/save`);
