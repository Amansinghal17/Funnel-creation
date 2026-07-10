import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BookingConfirmation } from '../../models/booking.model';

// Success state shown after a "payment" completes.
@Component({
  selector: 'app-success-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './success-card.component.html',
  styleUrl: './success-card.component.scss',
})
export class SuccessCardComponent {
  @Input({ required: true }) confirmation!: BookingConfirmation;
}
