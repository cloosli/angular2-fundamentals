import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id:0, text: `You've got mail`},
    {id:1, text: `You're now friends with John`},
    {id:2, text: `John liked your tweet`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id ? {id, text} : m
    );
  }

  constructor() { }

}
