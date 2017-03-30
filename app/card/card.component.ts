import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
  // If we put in relative path, the template would've been not found. commonjs helps with the moduleId. Read more for further explanation
  moduleId: module.id,
  selector: 'task-card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.css' ]
})

export class CardComponent {
  @Input() task: Task;
}
