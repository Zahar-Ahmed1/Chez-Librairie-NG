import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Form data
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Form state
  isSubmitting = false;
  formSubmitted = false;
  formSuccess = false;
  formError = '';

  // FAQ state
  faqItems = [
    {
      question: 'Quels sont vos horaires d\'ouverture ?',
      answer: 'Nous sommes ouverts du lundi au samedi de 9h à 19h. Fermé le dimanche et jours fériés.',
      isOpen: false
    },
    {
      question: 'Comment puis-je passer une commande ?',
      answer: 'Vous pouvez passer commande directement en ligne, par téléphone, ou vous rendre dans notre librairie.',
      isOpen: false
    },
    {
      question: 'Proposez-vous la livraison ?',
      answer: 'Oui, nous proposons la livraison dans toute la France avec différentes options de livraison.',
      isOpen: false
    },
    {
      question: 'Puis-je annuler ou modifier ma commande ?',
      answer: 'Vous pouvez annuler ou modifier votre commande dans les 24 heures suivant la passation.',
      isOpen: false
    }
  ];

  // Contact information
  contactInfo = {
    address: '123 Rue de la Librairie, 75001 Paris',
    phone: '+33 1 23 45 67 89',
    email: 'contact@chez-librairie.fr',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  };

  // Opening hours
  openingHours = [
    { day: 'Lundi - Vendredi', hours: '9h00 - 19h00' },
    { day: 'Samedi', hours: '9h00 - 18h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  // Toggle FAQ item
  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  // Handle form submission
  async onSubmit(): Promise<void> {
    // Validate form
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.formError = '';

    try {
      // Simulate API call
      await this.simulateFormSubmission();
      
      this.formSubmitted = true;
      this.formSuccess = true;
      this.resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
        this.formSuccess = false;
      }, 5000);
      
    } catch (error) {
      this.formError = 'Une erreur s\'est produite. Veuillez réessayer.';
      this.formSuccess = false;
    } finally {
      this.isSubmitting = false;
    }
  }

  // Validate form
  private validateForm(): boolean {
    if (!this.contactForm.name.trim()) {
      this.formError = 'Veuillez entrer votre nom.';
      return false;
    }

    if (!this.contactForm.email.trim()) {
      this.formError = 'Veuillez entrer votre email.';
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.formError = 'Veuillez entrer un email valide.';
      return false;
    }

    if (!this.contactForm.subject.trim()) {
      this.formError = 'Veuillez entrer un sujet.';
      return false;
    }

    if (!this.contactForm.message.trim()) {
      this.formError = 'Veuillez entrer votre message.';
      return false;
    }

    return true;
  }

  // Simulate form submission
  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Simulate 2 second delay
    });
  }

  // Reset form
  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  // Social media click handlers
  onSocialClick(platform: string): void {
    console.log(`Opening ${platform} link`);
    // In a real app, you would open the social media link
    // window.open(this.contactInfo.social[platform as keyof typeof this.contactInfo.social], '_blank');
  }

  // Phone call handler
  onPhoneClick(): void {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  // Email handler
  onEmailClick(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  // Map click handler
  onMapClick(): void {
    // Open Google Maps with the address
    const encodedAddress = encodeURIComponent(this.contactInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  }

  // Scroll to contact form
  scrollToContact(): void {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
