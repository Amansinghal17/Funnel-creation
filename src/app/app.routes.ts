import { Routes } from '@angular/router';

// All pages are lazy-loaded as standalone components (Angular 17 loadComponent API).
// This keeps the initial bundle small - only the Home page ships on first load.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Dialysis On Go | Book Dialysis Anywhere You Travel',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.component').then((m) => m.SearchComponent),
    title: 'Search Clinics | Dialysis On Go',
  },
  {
    path: 'clinics',
    loadComponent: () =>
      import('./pages/clinic-list/clinic-list.component').then((m) => m.ClinicListComponent),
    title: 'Clinics | Dialysis On Go',
  },
  {
    path: 'clinic/:id',
    loadComponent: () =>
      import('./pages/clinic-details/clinic-details.component').then((m) => m.ClinicDetailsComponent),
    title: 'Clinic Details | Dialysis On Go',
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./pages/booking/booking.component').then((m) => m.BookingComponent),
    title: 'Book Appointment | Dialysis On Go',
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./pages/payment/payment.component').then((m) => m.PaymentComponent),
    title: 'Payment | Dialysis On Go',
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./pages/success/success.component').then((m) => m.SuccessComponent),
    title: 'Booking Confirmed | Dialysis On Go',
  },
  { path: '**', redirectTo: '' },
];
