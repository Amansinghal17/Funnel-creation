import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { Clinic } from '../../models/clinic.model';

// Card used in the Clinic List (and Home "featured clinics") sections.
@Component({
  selector: 'app-clinic-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './clinic-card.component.html',
  styleUrl: './clinic-card.component.scss',
})
export class ClinicCardComponent {
  @Input({ required: true }) clinic!: Clinic;

  constructor(private router: Router) {}

  viewDetails(): void {
    this.router.navigate(['/clinic', this.clinic.id]);
  }

  bookNow(): void {
    // Carry the clinic id forward via query params - consumed on the Booking page.
    this.router.navigate(['/booking'], { queryParams: { clinicId: this.clinic.id } });
  }
}
