import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return '{ "title" : "Contato", "description" : "API para um serviço de gestão de contatos" }';
  }
}
