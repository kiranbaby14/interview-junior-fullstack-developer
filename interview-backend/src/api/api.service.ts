import { Injectable } from "@nestjs/common";
import axios from "axios";

/**
 * Class that implements the services to be provided by the api.module
 */
Injectable()
export class ApiService {

    private readonly apiUrl: string; // variable to store the database URL

    /**
     * Constructor for the class
     */
    constructor() {
        this.apiUrl = process.env.DB_PROXY; // Database URL
    }

    /**
     * function to get all city details from the database
     * 
     * @returns array of promise of all city details
     */
    async getAllCityDetails(): Promise<string[]> {
        try {
            const response = await axios.get(this.apiUrl);
            const cityDetails = response.data.map(({ cityName, count }) => ({ cityName, count }));
            return cityDetails;
        } catch (error) {
            return error.message;
        }
    }

     /**
      * function to get a specific city detail from the database
      * It return all the cities that match the given characters
      * 
      * @param cityName - name of the city to be searched for
      * @returns city details
      */
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