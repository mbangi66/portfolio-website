import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section class="ftco-section" id="services-section">
    	<div class="container-fluid px-md-5">
    		<div class="row justify-content-center py-5 mt-5">
          <div class="col-md-12 heading-section text-center ftco-animate">
          	<h1 class="big big-2">Services</h1>
            <h2 class="mb-4">Services</h2>
            <p>Offering web development solutions tailored to your needs and goals.</p>
          </div>
        </div>
    		<div class="row">
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-analysis"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Web Design</h3>
								<p>Creating modern, responsive web designs that captivate and engage users, ensuring a memorable online experience for your audience.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-flasks"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Phtography</h3>
								<p>Capturing moments and memories through the lens, transforming them into timeless photographs.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ideas"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Web Developer</h3>
								<p>Building innovative and responsive websites to bring your ideas to life and enhance your online presence.</p>
							</div>
						</a>
					</div>

					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-innovation"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">App Developing</h3>
								<p>Designing and developing custom mobile applications to meet your unique business needs and engage your audience on the go.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ux-design"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Cloud Storage</h3>
								<p>Securely storing and managing your data in the cloud, ensuring accessibility and reliability whenever you need it.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-idea"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Software and Hardware Support</h3>
								<p>Providing comprehensive software and hardware support to keep your systems running smoothly and efficiently.</p>
							</div>
						</a>
					</div>
				</div>
    	</div>
    </section>
  `,
  styles: ``
})
export class ServicesComponent {

}
