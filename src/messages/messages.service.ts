import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
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

  update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);
    // this.messages[index].text = message.text;
    this.messages[index] = message;
    return this.messages[index];
  }
}
