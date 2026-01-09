import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  currentStep = 1;
  totalSteps = 3;
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      // Step 1
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      cargo: [''],
      
      // Step 2
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      servicio: ['', Validators.required],
      
      // Step 3
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.contactForm.controls; }

  nextStep() {
    if (this.currentStep === 1) {
      if (this.f['nombre'].valid) {
        this.currentStep++;
      } else {
        this.f['nombre'].markAsTouched();
      }
    } else if (this.currentStep === 2) {
      if (this.f['email'].valid && this.f['telefono'].valid && this.f['servicio'].valid) {
        this.currentStep++;
      } else {
        this.f['email'].markAsTouched();
        this.f['telefono'].markAsTouched();
        this.f['servicio'].markAsTouched();
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario ojito eh
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
