import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.css']
})
export class InputUserDataFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
constructor(private formBuilder: FormBuilder)
{

}
invalidFirstName()
{
  return(this.submitted && this.userForm.controls.first_name.erros != null);
}
invalidEmail()
{
return (this.submitted && this.userForm.controls.email.erros != null);
}
invalidZipCode()
{
  return (this.submitted && this.userForm.controls.zipcode.erros != null);
}
invalidPassword()
{
  return (this.submitted && this.userForm.controls.password.erros != null);
}
ngOnInit()
{
  this.userForm = this.formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
  		password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
  });
}
onSubmit() {
  this.submitted = true;
  if(this.userForm.invalid == true) {
    return;
  }
  else
  {
    this.registered = true;
  }
}
}