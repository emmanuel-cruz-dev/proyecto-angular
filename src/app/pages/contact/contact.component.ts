import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.contactForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  enviar(event: Event) {
    event.preventDefault();
    console.log(event);
    console.log(this.contactForm.value);
  }

  hasErrors(field: string, validator: string) {
    return (
      this.contactForm.get(field)?.hasError(validator) &&
      this.contactForm.get(field)?.touched
    );
  }
}
