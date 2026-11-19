
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'specialorder',
  imports: [ReactiveFormsModule],
  templateUrl: './specialorder.component.html',
  styleUrl: './specialorder.component.css'
})
export class SpecialOrderComponent {

  myForm: FormGroup;
  referenceImages: File[] = [];

  constructor() {
    this.myForm = new FormGroup({
      pickupDate: new FormControl('', Validators.required),
      cakeSize: new FormControl('', Validators.required),
      designRequest: new FormControl(''),
      allergyNotes: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', Validators.required)
    });
  }

  // Handle uploaded images
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.referenceImages = input.files
      ? Array.from(input.files)
      : [];
  }

  // Handle form submission
  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      alert('Please fill in all required fields correctly.');
      return;
    }

    const formData = new FormData();

    // Add form fields
    Object.entries(this.myForm.value).forEach(([key, value]) => {
      formData.append(key, String(value ?? ''));
    });

    // Add reference images
    this.referenceImages.forEach(file => {
      formData.append('referenceImages', file);
    });

    // Development test only
    console.log('Special Order Information:');
    console.log(this.myForm.value);
    console.log('Reference Images:', this.referenceImages);

    // Backend submission will be added later.
  }
}
