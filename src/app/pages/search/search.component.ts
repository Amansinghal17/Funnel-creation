import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchBarComponent, SearchCriteria } from '../../components/search-bar/search-bar.component';
import { ClinicService } from '../../services/clinic.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  cities: string[] = [];

  constructor(private clinicService: ClinicService, private router: Router) {}

  ngOnInit(): void {
    this.cities = this.clinicService.getCities();
  }

  onSearch(criteria: SearchCriteria): void {
    // Forward the chosen city/hospital as query params to the Clinic List page.
    this.router.navigate(['/clinics'], { queryParams: criteria });
  }
}
