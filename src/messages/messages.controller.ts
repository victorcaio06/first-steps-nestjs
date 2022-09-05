import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipis',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipis sit',
      },
    ];
  }
}
