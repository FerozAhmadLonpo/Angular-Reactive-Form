import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from "./shared/user-name.validators";
import { PasswordValidator } from "./shared/password.validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  // registrationForm = new FormGroup({
  //   userName: new FormControl("Feroz"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     postalCode: new FormControl("")
  //   })
  // });

  registrationForm = this.fb.group(
    {
      userName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          forbiddenNameValidator(/password/)
        ]
      ],
      password: [""],
      confirmPassword: [""],
      address: this.fb.group({
        city: [""],
        state: [""],
        postalCode: [""]
      })
    },
    { validators: PasswordValidator }
  );

  loadApiData() {
    // this.registrationForm.setValue({
    //   userName: "Bruce",
    //   password: "test",
    //   confirmPassword: "test",
    //   address: {
    //     city: "City",
    //     state: "State",
    //     postalCode: "123456"
    //   }
    // });

    this.registrationForm.patchValue({
      userName: "Bruce",
      password: "test",
      confirmPassword: "test"
    });
  }
}
