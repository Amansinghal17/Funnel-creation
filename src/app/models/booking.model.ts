// Shape of the Reactive Form on the Booking page.
export interface Booking {
  clinicId: number;
  patientName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  preferredDate: string; // ISO date string
  preferredTime: string;
  reportFileName: string | null;
}

// Booking record once "paid" and confirmed - used on the Success page.
export interface BookingConfirmation extends Booking {
  bookingId: string;
  amountPaid: number;
  clinicName: string;
  bookedAt: string;
}
