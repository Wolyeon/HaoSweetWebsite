import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { CakeComponent } from '../cake.component';
import { Input } from '@angular/core';
import { CakeInformation } from '../cakeinformation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ordermenu',
  imports: [FormsModule, ReactiveFormsModule, CakeComponent],
  templateUrl: './ordermenu.component.html',
  styleUrl: './ordermenu.component.css'
})
export class OrderComponent {
  @Input() cakeInformation!: CakeInformation;
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
