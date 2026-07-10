import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

import { Clinic } from '../models/clinic.model';

// No backend for this assignment - all data is mocked in-memory here.
// Every method returns an Observable (with a small artificial delay) so
// components can consume it exactly like a real HTTP call, and the
// Loader component has something real to show.
@Injectable({ providedIn: 'root' })
export class ClinicService {
  private readonly clinics: Clinic[] = [
    {
      id: 1,
      name: 'Al Noor Renal Care Centre',
      hospital: 'Al Noor Hospital',
      city: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      rating: 4.7,
      reviewsCount: 312,
      pricePerSession: 180,
      availableSlots: ['08:00 AM', '11:00 AM', '03:00 PM'],
      modality: ['In-Centre HD'],
      facilities: ['24/7 Support', 'Airport Pickup', 'English & Arabic Staff', 'Private Rooms'],
      doctors: [
        { name: 'Dr. Amina Khalid', specialization: 'Nephrologist', experience: '14 years', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
        { name: 'Dr. Rashid Al Farsi', specialization: 'Renal Physician', experience: '9 years', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
      ],
      description: 'A leading dialysis centre in Dubai offering premium in-centre hemodialysis with multilingual staff and full travel support for visiting patients.',
    },
    {
      id: 2,
      name: 'Marina Dialysis Institute',
      hospital: 'Marina Health Hospital',
      city: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
      rating: 4.5,
      reviewsCount: 198,
      pricePerSession: 210,
      availableSlots: ['09:00 AM', '01:00 PM'],
      modality: ['In-Centre HD', 'Home HD'],
      facilities: ['Airport Pickup', 'Insurance Assistance', 'Wheelchair Access'],
      doctors: [
        { name: 'Dr. Sara Al Mansoori', specialization: 'Nephrologist', experience: '11 years', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
      ],
      description: 'Waterfront clinic in Dubai Marina combining premium hospitality with clinical-grade dialysis care for travellers.',
    },
    {
      id: 3,
      name: 'Sukhumvit Kidney Centre',
      hospital: 'Sukhumvit General Hospital',
      city: 'Bangkok',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      rating: 4.6,
      reviewsCount: 421,
      pricePerSession: 95,
      availableSlots: ['07:30 AM', '10:30 AM', '02:00 PM', '05:00 PM'],
      modality: ['In-Centre HD'],
      facilities: ['English Spoken', 'Budget Friendly', 'Near BTS Station'],
      doctors: [
        { name: 'Dr. Somchai Wattana', specialization: 'Nephrologist', experience: '16 years', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
      ],
      description: 'Affordable, highly-rated dialysis care in central Bangkok, popular with long-stay travellers on a budget.',
    },
    {
      id: 4,
      name: 'Riverside Nephrology Clinic',
      hospital: 'Riverside Medical Centre',
      city: 'Bangkok',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      rating: 4.4,
      reviewsCount: 156,
      pricePerSession: 120,
      availableSlots: ['08:00 AM', '12:00 PM'],
      modality: ['In-Centre HD', 'Peritoneal Dialysis'],
      facilities: ['River View', 'Private Suites', 'PD Training'],
      doctors: [
        { name: 'Dr. Ploy Chaiyaporn', specialization: 'Renal Physician', experience: '10 years', image: 'https://randomuser.me/api/portraits/women/50.jpg' },
      ],
      description: 'A calm riverside setting for patients who want comfort alongside clinical dialysis treatment.',
    },
    {
      id: 5,
      name: 'Clinica Renal do Tejo',
      hospital: 'Hospital do Tejo',
      city: 'Lisbon',
      country: 'Portugal',
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80',
      rating: 4.8,
      reviewsCount: 267,
      pricePerSession: 140,
      availableSlots: ['09:00 AM', '01:30 PM'],
      modality: ['In-Centre HD'],
      facilities: ['Historic District', 'English & Portuguese Staff', 'Free WiFi'],
      doctors: [
        { name: 'Dr. Mariana Costa', specialization: 'Nephrologist', experience: '13 years', image: 'https://randomuser.me/api/portraits/women/22.jpg' },
      ],
      description: 'Located in the heart of Alfama, this clinic pairs Portuguese hospitality with modern dialysis equipment.',
    },
    {
      id: 6,
      name: 'Atlantico Dialysis Group',
      hospital: 'Atlantico Hospital',
      city: 'Lisbon',
      country: 'Portugal',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
      rating: 4.3,
      reviewsCount: 134,
      pricePerSession: 160,
      availableSlots: ['10:00 AM', '03:00 PM'],
      modality: ['In-Centre HD', 'Home HD'],
      facilities: ['Coastal Location', 'Private Transport'],
      doctors: [
        { name: 'Dr. Joao Ferreira', specialization: 'Renal Physician', experience: '8 years', image: 'https://randomuser.me/api/portraits/men/61.jpg' },
      ],
      description: 'Coastal dialysis centre with flexible home hemodialysis support for extended stays.',
    },
    {
      id: 7,
      name: 'Ubud Wellness Renal Clinic',
      hospital: 'Ubud Community Hospital',
      city: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      rating: 4.6,
      reviewsCount: 89,
      pricePerSession: 110,
      availableSlots: ['08:00 AM', '11:00 AM'],
      modality: ['In-Centre HD', 'Peritoneal Dialysis'],
      facilities: ['Wellness Programs', 'English Spoken', 'Jungle View'],
      doctors: [
        { name: 'Dr. Kadek Wirawan', specialization: 'Nephrologist', experience: '12 years', image: 'https://randomuser.me/api/portraits/men/29.jpg' },
      ],
      description: 'A tranquil clinic in Ubud combining clinical dialysis with Bali\u2019s renowned wellness culture.',
    },
    {
      id: 8,
      name: 'Bosphorus Kidney Institute',
      hospital: 'Bosphorus General Hospital',
      city: 'Istanbul',
      country: 'Turkey',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80',
      rating: 4.5,
      reviewsCount: 203,
      pricePerSession: 100,
      availableSlots: ['07:00 AM', '12:00 PM', '04:00 PM'],
      modality: ['In-Centre HD'],
      facilities: ['Bosphorus View', 'Airport Shuttle', 'Halal Meals'],
      doctors: [
        { name: 'Dr. Elif Yildiz', specialization: 'Nephrologist', experience: '15 years', image: 'https://randomuser.me/api/portraits/women/40.jpg' },
      ],
      description: 'Centrally located dialysis institute with panoramic Bosphorus views and full traveller amenities.',
    },
    {
      id: 9,
      name: 'Table Bay Renal Centre',
      hospital: 'Table Bay Hospital',
      city: 'Cape Town',
      country: 'South Africa',
      image: 'https://images.unsplash.com/photo-1580281657702-257584239a55?w=800&q=80',
      rating: 4.4,
      reviewsCount: 112,
      pricePerSession: 130,
      availableSlots: ['09:00 AM', '02:00 PM'],
      modality: ['In-Centre HD', 'Home HD'],
      facilities: ['Mountain View', 'English Spoken', 'Insurance Assistance'],
      doctors: [
        { name: 'Dr. Thandiwe Nkosi', specialization: 'Renal Physician', experience: '10 years', image: 'https://randomuser.me/api/portraits/women/55.jpg' },
      ],
      description: 'Modern renal centre near Table Mountain, popular with safari and coastal-route travellers.',
    },
    {
      id: 10,
      name: 'KL Central Dialysis Hub',
      hospital: 'KL Central Hospital',
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
      rating: 4.2,
      reviewsCount: 176,
      pricePerSession: 105,
      availableSlots: ['08:30 AM', '01:00 PM', '06:00 PM'],
      modality: ['In-Centre HD', 'Peritoneal Dialysis'],
      facilities: ['City Centre Location', 'English & Malay Staff', '24/7 Support'],
      doctors: [
        { name: 'Dr. Aisyah Rahman', specialization: 'Nephrologist', experience: '9 years', image: 'https://randomuser.me/api/portraits/women/33.jpg' },
      ],
      description: 'Well-connected dialysis hub in downtown KL with extended evening slots for travellers on tight itineraries.',
    },
  ];

  /** Returns all clinics, optionally filtered by city and/or hospital name (case-insensitive). */
  getClinics(city?: string, hospital?: string): Observable<Clinic[]> {
    let result = this.clinics;

    if (city) {
      result = result.filter((c) => c.city.toLowerCase().includes(city.toLowerCase()));
    }
    if (hospital) {
      result = result.filter((c) => c.hospital.toLowerCase().includes(hospital.toLowerCase()));
    }

    return of(result).pipe(delay(400)); // simulate network latency
  }

  /** Returns a single clinic by id, or undefined if not found. */
  getClinicById(id: number): Observable<Clinic | undefined> {
    return of(this.clinics.find((c) => c.id === id)).pipe(delay(300));
  }

  /** Distinct list of cities - used to populate the Search page dropdown. */
  getCities(): string[] {
    return [...new Set(this.clinics.map((c) => c.city))];
  }
}
