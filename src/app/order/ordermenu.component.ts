import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { CakeComponent } from '../cake.component';
import { Input } from '@angular/core';
import { CakeInformation } from '../cakeinformation';
import { WebServices } from '../webservices';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderInformation } from '../orderinformation';

@Component({
  selector: 'ordermenu',
  imports: [FormsModule, ReactiveFormsModule, NgFor, RouterLink, CakeComponent],
  templateUrl: './ordermenu.component.html',
  styleUrl: './ordermenu.component.css'
})
export class OrderComponent {
  @Input() cakeName?: string;
  AllCakes!: CakeInformation[];
  selectedCake!: CakeInformation;
  cakeSizes?: string[];
  myForm: FormGroup;

  constructor(private ws: WebServices){
    this.myForm = new FormGroup({
      cake: new FormControl("", [Validators.required]),
      readTerms: new FormControl(false, [Validators.required, Validators.requiredTrue]),
      pickup: new FormControl("", Validators.required),
      lactose: new FormControl("", [Validators.required]),
      cakeSize: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required, Validators.maxLength(250)]),
      allergies: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    })
  }

  refreshSizes(cake: string){
    this.selectedCake = this.AllCakes.filter(product => product.name === cake)[0];
    this.cakeSizes = this.selectedCake.sizes;
    this.ws.get_allproducts().subscribe(
      data => this.AllCakes = data
    );
  }

  ngOnInit(){
    this.ws.get_allproducts().subscribe(
      data => {
        this.AllCakes = data;
        if (this.cakeName != undefined){
          this.myForm.get("cake")?.setValue(this.cakeName);
          this.refreshSizes(this.cakeName);
        }
        else{
          this.myForm.get("cake")?.setValue(this.AllCakes[0].name);
          this.refreshSizes(this.AllCakes[0].name);
        }
      }
    )
  }
  
  onSubmit() {
    if (this.myForm.valid) {
      this.ws.post_order(this.myForm.value as OrderInformation);
    }
  }
}
