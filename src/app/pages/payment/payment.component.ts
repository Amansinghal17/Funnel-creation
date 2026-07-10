import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PaymentSummaryComponent } from '../../components/payment-summary/payment-summary.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../models/clinic.model';
import { Booking, BookingConfirmation } from '../../models/booking.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, PaymentSummaryComponent, LoaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit {
  clinic: Clinic | undefined;
  booking: Booking | undefined;
  loading = true;
  processing = false;

  constructor(private router: Router, private clinicService: ClinicService) {}

  ngOnInit(): void {
    // Reactive Forms data was passed forward via router navigation state (no backend to persist it).
    const booking = (history.state?.['booking'] as Booking | undefined);

    if (!booking) {
      this.router.navigate(['/search']);
      return;
    }

    this.booking = booking;
    this.clinicService.getClinicById(booking.clinicId).subscribe((clinic) => {
      this.clinic = clinic;
      this.loading = false;
    });
  }

  payNow(): void {
    if (!this.clinic || !this.booking) return;

    this.processing = true;

    // Simulate a payment gateway round-trip - no real payment integration required for this assignment.
    setTimeout(() => {
      const confirmation: BookingConfirmation = {
        ...this.booking!,
        bookingId: 'DOG-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
        amountPaid: this.clinic!.pricePerSession,
        clinicName: this.clinic!.name,
        bookedAt: new Date().toISOString(),
      };

      this.processing = false;
      this.router.navigate(['/success'], { state: { confirmation } });
    }, 1200);
  }
}
