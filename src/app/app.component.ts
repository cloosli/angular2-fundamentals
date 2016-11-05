import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get startet!`;
  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ) {}
}
