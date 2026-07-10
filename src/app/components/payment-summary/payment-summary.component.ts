import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Clinic } from '../../models/clinic.model';
import { Booking } from '../../models/booking.model';

// Read-only summary of clinic + patient + amount, shown on the Payment page.
@Component({
  selector: 'app-payment-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.scss',
})
export class PaymentSummaryComponent {
  @Input({ required: true }) clinic!: Clinic;
  @Input({ required: true }) booking!: Booking;
}
