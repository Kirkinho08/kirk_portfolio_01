import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private emailService: EmailService) {}

  onSubmit() {

    const templateParams = {
      name: this.contactForm.name,
      email: this.contactForm.email,
      message: this.contactForm.message,
    };
    this.emailService.sendEmail(templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Message failed to send.');
      }
    );
  }
}
