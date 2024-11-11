import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {
        return {body};
    }

    @Get()
    async getAll() { //list
        return { users: [] }
    }

    @Get(':id')
    async getOne(@Param() param) {  //show
        return { user: [], param }
    }
}