import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  public sendEmail(contactForm: { name: string; email: string; message: string }) {
    return emailjs.send(
      'service_i2157rr',
      'template_h852iml',
      contactForm,
      'L-2B3CsQwUBj_fGZu'
    );
  }
}
