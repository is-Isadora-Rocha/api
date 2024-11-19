import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body, @Param() params) {
        return { 
            method: 'post',
            body, 
            params
            };
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