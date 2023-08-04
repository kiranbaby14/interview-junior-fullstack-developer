import { Controller, Get, Param } from "@nestjs/common";
import { ApiService } from "./api.service";

@Controller('api')
export class ApiController {
    constructor(private apiService: ApiService){}

    @Get("city/all")
    getAllCityDetails(){
        return this.apiService.getAllCityDetails();
    }

    @Get("city/search/:name")
    getCityNameDetails(@Param('name') cityName: string ){
        return this.apiService.getCityNameDetails(cityName);
    }

}