import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipis',
    },
    {
      id: 2,
      text: 'Teste testado com sucesso',
    },
  ];

  findAll() {
    return this.messages;
  }
}
