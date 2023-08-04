import { Injectable } from "@nestjs/common";
import axios from "axios";

Injectable()
export class ApiService {
    async getAllCities() {
        const apiUrl = process.env.DB_PROXY;
        try {
            const response = await axios.get(apiUrl);
            return response.data;
          } catch (error) {
            return error.message;
          }
    }
}