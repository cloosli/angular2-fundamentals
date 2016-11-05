import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `You've got mail`,
    `You're now friends with John`,
    `John liked your tweet`
  ];

  constructor() { }

}
