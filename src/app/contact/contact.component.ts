import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  template: `
    <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container">
      	<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h1 class="big big-2">Contact</h1>
            <h2 class="mb-4">Contact Me</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-map-signs"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Address</h3>
		            <p>Ardiya Kuwait 138st</p>
		          </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-phone2"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Contact Number</h3>
		            <p><a href="tel://+965 410 76750">+965 410 76750</a></p>
	            </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-paper-plane"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Email Address</h3>
		            <p><a href="mailto:mbangi66@gmail.com">mbangi66&#64;gmail.com</a></p>
		          </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-globe"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Website</h3>
		            <p><a href="https://github.com/mbangi66">Mustaqeem.com</a></p>
	            </div>
	          </div>
          </div>
        </div>

        <div class="row no-gutters block-9">
          <div class="col-md-6 order-md-last d-flex">
          <form (ngSubmit)="submitForm()" [formGroup]="contactForm" class="bg-light p-4 p-md-5 contact-form">
            <div class="form-group">
            <div class="form-group" *ngIf="errorMessage">
              <span class="text-danger">{{ errorMessage }}</span>
            </div>
              <div class="alert alert-success" role="alert" *ngIf="successMessage">
                {{ successMessage }}
              </div>
              <input type="text" class="form-control" formControlName="Name" placeholder="Your Name">
              <div class="form-group" *ngIf="nameErrorMessage">
                <span class="text-danger">{{ nameErrorMessage }}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" formControlName="Email" placeholder="Your Email">
              <div class="form-group" *ngIf="emailErrorMessage">
                <span class="text-danger">{{ emailErrorMessage }}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" formControlName="Subject" placeholder="Subject">
              <div class="form-group" *ngIf="subjectErrorMessage">
                <span class="text-danger">{{ subjectErrorMessage }}</span>
              </div>
            </div>
            <div class="form-group">
              <textarea cols="30" rows="7" formControlName="message" class="form-control" placeholder="Message"></textarea>
              <div class="form-group" *ngIf="messageErrorMessage">
                <span class="text-danger">{{ messageErrorMessage }}</span>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" [disabled]="!contactForm.valid || isSubmitting" class="btn btn-primary py-3 px-5">
                Send Message
                <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm ml-2" role="status" aria-hidden="true"></span>
              </button>
            </div>
            <div *ngIf="submissionError" class="alert alert-danger" role="alert">
              An error occurred while sending your message. Please try again later.
            </div>
          </form>
          </div>

          <div class="col-md-6 d-flex">
          	<div class="img" style="background-image: url(../assets/images/about1.jpg);"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})

export class ContactComponent  {
  contactForm: FormGroup ;
  isSubmitting = false;
  submissionError = false;
  errorMessage: string = '';
  nameErrorMessage: string = '';
  emailErrorMessage: string = '';
  subjectErrorMessage: string = '';
  messageErrorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.contactForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Subject: [''],
      message: ['', Validators.required]
    });
  }


  submitForm() {
    if (this.contactForm.valid) {
      this.isSubmitting = true; 
      this.submissionError = false; 

      this.http.post('https://formspree.io/f/xnqerwzv', this.contactForm.value)
          .subscribe(response => {
            console.log('Form submission successful!', response);
            this.successMessage = 'Your message has been sent successfully!';
            this.isSubmitting = false;
            this.contactForm.reset(); 
          }, error => {
            console.error('Form submission failed:', error);
            this.isSubmitting = false;
            this.submissionError = true; 
          });
    } else {
      this.errorMessage = 'Please correct form errors before submitting.';
  
      // Set specific field errors based on validation failures
      this.nameErrorMessage = this.contactForm.controls['Name'].errors?.['required'] ? 'Name is required' : '';
      this.emailErrorMessage = this.contactForm.controls['Email'].errors?.['required']? 'Email is required' : this.contactForm.controls['email'].errors?.['email'] ? 'Invalid email format' : '';
      this.subjectErrorMessage = this.contactForm.controls['Subject'].errors?.['required']? 'Subject is required' : '';
      this.messageErrorMessage = this.contactForm.controls['message'].errors?.['required'] ? 'Message is required' : '';
    }
  }
}
