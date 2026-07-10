import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Clinic } from '../../models/clinic.model';
import { Booking } from '../../models/booking.model';

// Reactive form for patient + appointment details, used on the Booking page.
@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss',
})
export class BookingFormComponent implements OnInit {
  @Input({ required: true }) clinic!: Clinic;
  @Output() submitBooking = new EventEmitter<Booking>();

  minDate = new Date();
  selectedFileName: string | null = null;

  form = this.fb.group({
    patientName: ['', [Validators.required, Validators.minLength(2)]],
    age: [null as number | null, [Validators.required, Validators.min(1), Validators.max(120)]],
    gender: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    preferredDate: [null as Date | null, Validators.required],
    preferredTime: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFileName = input.files?.[0]?.name ?? null;
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.getRawValue();
    const booking: Booking = {
      clinicId: this.clinic.id,
      patientName: raw.patientName!,
      age: raw.age!,
      gender: raw.gender as Booking['gender'],
      phone: raw.phone!,
      email: raw.email!,
      preferredDate: (raw.preferredDate as Date).toISOString(),
      preferredTime: raw.preferredTime!,
      reportFileName: this.selectedFileName,
    };

    this.submitBooking.emit(booking);
  }
}
