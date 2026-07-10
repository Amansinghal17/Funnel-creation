# Dialysis On Go — Angular 17 Frontend Booking App

A polished healthcare travel booking demo built with Angular 17. This frontend-only app showcases a multi-step clinic search, booking, payment summary, and success flow using mocked clinic data.

## Overview

- Built as a recruiter-friendly prototype for a medical tourism / dialysis travel booking experience.
- Uses Angular standalone components, Angular Material UI, and reactive forms.
- No backend is included: clinic records are mocked in `src/app/services/clinic.service.ts`.
- Booking state is passed through Angular Router navigation state to mimic a checkout flow.

## Key Features

- Search clinics by city and hospital name
- Clinic list with filtering and card-based UI
- Clinic detail page with doctors, facilities, and appointment slots
- Booking form with validation and report upload placeholder
- Payment summary page with mock transaction flow
- Success page with appointment recap and booking reference
- Responsive layout and Material design components

## Tech Stack

- Angular 17
- Angular Material
- RxJS
- SCSS
- TypeScript

## Setup and Run

```bash
npm install
npm start
```

Then open `http://localhost:4200` in your browser.

## Project Structure

```
src/app/
├── components/    Reusable UI components (navbar, footer, clinic-card, loader, etc.)
├── pages/         Route pages for home, search, clinic details, booking, payment, success
├── services/      Mock clinic data and data access logic
├── models/        Shared TypeScript interfaces for clinics and bookings
├── app.routes.ts  Route definitions and lazy loading
├── app.config.ts  App metadata and shared settings
```

## Why this structure

- **Mocked data service**: keeps the demo simple while allowing components to consume data in a realistic way.
- **Router state for booking flow**: simulates how checkout state can move between pages without a backend.
- **Standalone components**: aligned with Angular 17 best practices and minimal bootstrap overhead.

## Notes for recruiters

- This repo is designed as a frontend assessment or portfolio project.
- It demonstrates component-based UI, route-driven workflows, and form validation.
- It is intentionally frontend-only, so it can be run locally without server setup.

## Next improvements

- Add backend API integration for clinic data and bookings
- Add authentication and user profiles
- Add payment gateway integration
- Implement unit and end-to-end tests
