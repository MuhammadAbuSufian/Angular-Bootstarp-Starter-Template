import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserRequestModel} from '../../request-model/user.request.model';

@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html'
})
export class UserRegisterComponent {
  user: UserRequestModel = new UserRequestModel();

  constructor(private toastr: ToastrService) {}

  submit(form) {
    console.log(this.user);

    if (form.invalid) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.toastr.success('Submitted', 'Success');
      form.submitted = false;
      form.reset();
    }
  }

}
