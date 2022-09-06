import { Injectable } from '@nestjs/common';
import { Message } from './message';

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

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }
}
