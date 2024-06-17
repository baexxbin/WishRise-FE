// service class를 통해 axios 접근

import axios, { AxiosInstance } from 'axios';

export default class AxiosService {

    static readonly Instance: AxiosInstance = axios.create({
        timeout: 10000,
    });
}