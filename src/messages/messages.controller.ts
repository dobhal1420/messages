import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { get } from 'http';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  //   @Get()
  //   listMessages() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
