import { Controller, Get, Param } from "@nestjs/common";
import { ApiService } from "./api.service";

/**
 * Controller class for the api.module
 */
@Controller('api')
export class ApiController {
    /**
     * Constructor for the class
     * 
     * @param apiService injects api.service
     */
    constructor(private apiService: ApiService){}

    /**
     * api endpoint for getting all city detail;s
     * @returns all city details
     */
    @Get("city/all")
    getAllCityDetails(){
        return this.apiService.getAllCityDetails();
    }


    /**
     * api endpoint for searching for a specific city detail
     * 
     * @param cityName name to be searched for
     * @returns array of cities that includes the the given words in it
     */
    @Get("city/search/:name")
    getCityNameDetails(@Param('name') cityName: string ){
        return this.apiService.getCityNameDetails(cityName);
    }

}