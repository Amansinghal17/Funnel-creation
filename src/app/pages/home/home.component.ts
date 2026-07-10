import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HeroComponent } from '../../components/hero/hero.component';
import { SearchBarComponent, SearchCriteria } from '../../components/search-bar/search-bar.component';
import { ClinicCardComponent } from '../../components/clinic-card/clinic-card.component';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../models/clinic.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, HeroComponent, SearchBarComponent, ClinicCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cities: string[] = [];
  featuredClinics: Clinic[] = [];

  whyChooseUs = [
    { icon: 'verified', title: 'Verified Clinics', text: 'Every clinic is vetted for hygiene, staff qualifications, and equipment standards.' },
    { icon: 'support_agent', title: '24/7 Support', text: 'Our travel-care team is on call before, during, and after your session.' },
    { icon: 'payments', title: 'Transparent Pricing', text: 'See exact session costs upfront - no hidden fees, ever.' },
    { icon: 'public', title: 'Global Coverage', text: 'From Dubai to Bali, book dialysis care in 35+ countries.' },
  ];

  howItWorks = [
    { step: 1, title: 'Search', text: 'Tell us your destination city and travel dates.' },
    { step: 2, title: 'Compare', text: 'Browse verified clinics with ratings, slots and pricing.' },
    { step: 3, title: 'Book', text: 'Fill in patient details and confirm your appointment.' },
    { step: 4, title: 'Travel', text: 'Arrive and walk straight into your scheduled session.' },
  ];

  testimonials = [
    { name: 'Ritika Sharma', location: 'Traveled to Dubai', quote: 'Booking my session before landing removed all my travel anxiety.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'James Carter', location: 'Traveled to Bangkok', quote: 'The clinic was exactly as described - clean, professional, on time.', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Fatima Noor', location: 'Traveled to Lisbon', quote: 'Support team helped me reschedule instantly when my flight changed.', avatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
  ];

  constructor(private clinicService: ClinicService, private router: Router) {}

  ngOnInit(): void {
    this.cities = this.clinicService.getCities();
    this.clinicService.getClinics().subscribe((clinics) => {
      this.featuredClinics = clinics.slice(0, 3);
    });
  }

  onSearch(criteria: SearchCriteria): void {
    this.router.navigate(['/clinics'], { queryParams: criteria });
  }
}
