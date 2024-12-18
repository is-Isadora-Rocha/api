import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() {email, name, password}: CreateUserDTO) {
        return { email, name, password };
    }

    @Get()
    async getAll() { //list
        return { users: [] }
    }

    @Get(':id')
    async getOne(@Param() params) {  //show
        return { user: [], params }
    }

    @Put(':id')
    async update(@Body() body, @Param() params){
        return {
            method: 'put',
            body, 
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'patch',
            body, 
            params
        }
    }
    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }
}