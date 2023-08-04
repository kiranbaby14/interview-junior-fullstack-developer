import { Controller, Get } from "@nestjs/common";
import { ApiService } from "./api.service";

@Controller('api')
export class ApiController {
    constructor(private apiService: ApiService){}

    @Get("all-cities")
    getAllCities(){
        return this.apiService.getAllCities();
    }
}