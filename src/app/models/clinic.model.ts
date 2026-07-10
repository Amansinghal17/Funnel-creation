// Doctor associated with a clinic - shown on the Clinic Details page.
export interface Doctor {
  name: string;
  specialization: string;
  experience: string; // e.g. "12 years"
  image: string;
}

// Core clinic entity used across Search, Clinic List, and Clinic Details pages.
export interface Clinic {
  id: number;
  name: string;
  hospital: string;
  city: string;
  country: string;
  image: string;
  rating: number; // out of 5
  reviewsCount: number;
  pricePerSession: number; // in USD
  availableSlots: string[]; // e.g. ["09:00 AM", "02:00 PM"]
  modality: ('In-Centre HD' | 'Peritoneal Dialysis' | 'Home HD')[];
  facilities: string[];
  doctors: Doctor[];
  description: string;
}
