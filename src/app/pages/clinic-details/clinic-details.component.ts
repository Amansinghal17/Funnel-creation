import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { LoaderComponent } from '../../components/loader/loader.component';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../models/clinic.model';

@Component({
  selector: 'app-clinic-details',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatChipsModule, LoaderComponent],
  templateUrl: './clinic-details.component.html',
  styleUrl: './clinic-details.component.scss',
})
export class ClinicDetailsComponent implements OnInit {
  clinic: Clinic | undefined;
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private clinicService: ClinicService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clinicService.getClinicById(id).subscribe((clinic) => {
      this.clinic = clinic;
      this.loading = false;
    });
  }

  bookNow(): void {
    if (!this.clinic) return;
    this.router.navigate(['/booking'], { queryParams: { clinicId: this.clinic.id } });
  }
}
