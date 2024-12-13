import { Controller, Get } from '@nestjs/common';

@Controller('hello') // This defines the route /hello
export class HelloController {
    @Get()
    getHello(): string {
        return 'Hello, welcome to NestJS! :D';
    }
}
