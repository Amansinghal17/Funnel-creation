import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClinicCardComponent } from '../../components/clinic-card/clinic-card.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../models/clinic.model';

@Component({
  selector: 'app-clinic-list',
  standalone: true,
  imports: [CommonModule, ClinicCardComponent, LoaderComponent],
  templateUrl: './clinic-list.component.html',
  styleUrl: './clinic-list.component.scss',
})
export class ClinicListComponent implements OnInit {
  clinics: Clinic[] = [];
  loading = true;
  city = '';
  hospital = '';

  constructor(private route: ActivatedRoute, private clinicService: ClinicService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.city = params.get('city') ?? '';
      this.hospital = params.get('hospital') ?? '';
      this.fetchClinics();
    });
  }

  private fetchClinics(): void {
    this.loading = true;
    this.clinicService.getClinics(this.city, this.hospital).subscribe((clinics) => {
      this.clinics = clinics;
      this.loading = false;
    });
  }
}
