import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookingFormComponent } from '../../components/booking-form/booking-form.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../models/clinic.model';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, BookingFormComponent, LoaderComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  clinic: Clinic | undefined;
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private clinicService: ClinicService) {}

  ngOnInit(): void {
    const clinicId = Number(this.route.snapshot.queryParamMap.get('clinicId'));

    if (!clinicId) {
      // No clinic chosen yet - send the patient to search first.
      this.router.navigate(['/search']);
      return;
    }

    this.clinicService.getClinicById(clinicId).subscribe((clinic) => {
      this.clinic = clinic;
      this.loading = false;
    });
  }

  onBookingSubmitted(booking: Booking): void {
    // No backend - pass the booking + clinic id forward to the Payment page via navigation state.
    this.router.navigate(['/payment'], { state: { booking } });
  }
}
