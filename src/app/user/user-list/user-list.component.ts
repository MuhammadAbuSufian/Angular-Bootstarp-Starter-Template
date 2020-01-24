import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})
export class UserListComponent {
  @Input() employees: any[];
}
