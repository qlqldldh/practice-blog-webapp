import { toCamelCaseKeys } from './objectUtils';
import axios from "axios";

export const fetchData = async (url: string, params?: any) => {
    const fullUrl = 'http://localhost:8000' + url;
    console.log(fullUrl);
    const response = await axios.get(fullUrl, params)
                                .then(response => response);

    return response;
}

export const getItem = async (url: string, params?: any) => {
    const { data, status } = await fetchData(url, params);

    return { data: toCamelCaseKeys(data), status };
}

export const getList = async (url: string, params?: any) => {
    const { data, status } = await fetchData(url, params);

    return { data: data.map((item: any) => toCamelCaseKeys(item)), status };
}

export const addNewItem = async (url: string, item: any) => {
    const fullUrl = 'http://localhost:8000' + url;
    const response = await axios.post(fullUrl, item)
                            .then(response => response)
                            .catch(error => error.response);

    return response;
}

export const deleteItem = async (url: string, id: number) => {
    const fullUrl = `http://localhost:8000${url}/${id}`;
    const response = await axios.delete(fullUrl);

    return response;
}
