import {Component} from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html'
})
export class UserRegisterComponent {

  submit(form) {
    console.log(form.value);
  }

}
