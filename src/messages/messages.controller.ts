import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(parseInt(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messagesService
      .update(parseInt(params.id), messageDto)
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(parseInt(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
