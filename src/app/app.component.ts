import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoApp';
  user = 'Rukiye';
  items = [
    { description: 'Breakfast', Action: 'No' },
    { description: 'Sport', Action: 'No' },
    { description: 'Lesson', Action: 'No' },
    { description: 'Walk', Action: 'No' },
  ];
}
