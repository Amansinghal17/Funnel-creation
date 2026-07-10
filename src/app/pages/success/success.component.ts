import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SuccessCardComponent } from '../../components/success-card/success-card.component';
import { BookingConfirmation } from '../../models/booking.model';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, SuccessCardComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent implements OnInit {
  confirmation: BookingConfirmation | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const confirmation = history.state?.['confirmation'] as BookingConfirmation | undefined;

    if (!confirmation) {
      this.router.navigate(['/']);
      return;
    }

    this.confirmation = confirmation;
  }
}
