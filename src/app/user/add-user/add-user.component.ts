import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-add-user',
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent {
  @Output() addEmp: EventEmitter<any> = new EventEmitter<any>();
  newEmp = {id: "1",    employee_name: "Tiger Nixon",    employee_salary: "320800",    employee_age: "61",    profile_image: ""};
  saveEmp() {
    this.addEmp.emit(this.newEmp);
  }
}
