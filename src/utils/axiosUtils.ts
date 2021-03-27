import { toCamelCaseKeys } from './objectUtils';
import axios from "axios";
import { ContactlessOutlined } from '@material-ui/icons';

export const fetchData = async (url: string, params?: any) => {
    // const fullUrl = process.env.NEXT_PUBLIC_API_URL + url;
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
    console.log(data, status, typeof(data));

    return { data: data.map((item: any) => toCamelCaseKeys(item)), status };
}
