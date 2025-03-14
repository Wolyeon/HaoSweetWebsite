import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ordermenu',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ordermenu.component.html',
  styleUrl: './ordermenu.component.css'
})
export class OrderComponent {
  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      readTerms: new FormControl(false, [Validators.required, Validators.requiredTrue]),
      pickup: new FormControl("", Validators.required),
      lactose: new FormControl("", [Validators.required]),
      cakeSize: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required, Validators.maxLength(250)]),
      allergies: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    })
  }
  
  onSubmit() {
    if (this.myForm.valid) {
      // Do Something with the values.
    }
  }
}
