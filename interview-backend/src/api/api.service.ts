import { Injectable } from "@nestjs/common";
import axios from "axios";

Injectable()
export class ApiService {

    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = process.env.DB_PROXY;
    }

    async getAllCityDetails(): Promise<string[]> {
        try {
            const response = await axios.get(this.apiUrl);
            const cityDetails = response.data.map(({ cityName, count }) => ({ cityName, count }));
            return cityDetails;
        } catch (error) {
            return error.message;
        }
    }

    async getCityNameDetails(cityName: String): Promise<string[]> {
        try {
            const response = await axios.get(this.apiUrl);
            const matchingCityNames = response.data
                .filter((city) => city.cityName.toLowerCase().includes(cityName.toLowerCase()))
                .map(({ cityName, count }) => ({ cityName, count }));

            return matchingCityNames;
        } catch (error) {
            return error.message;
        }
    }

}