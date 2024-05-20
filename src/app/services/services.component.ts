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
								<h3 class="mb-5">Custom Web Development</h3>
								<p>Offering custom website development using HTML5, CSS3, and JavaScript/TypeScript to create tailored solutions for clients.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-flasks"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">WordPress Website Design and Development</h3>
								<p>Providing WordPress website design and development services, including theme customization, plugin integration, and content management system setup.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ideas"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Database Management and Integration</h3>
								<p>Offering MySQL database development and management services for dynamic web applications, as well as MongoDB database setup and integration for flexible data storage.</p>
							</div>
						</a>
					</div>

					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-innovation"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Development with .NET and C#</h3>
								<p>Development services using .NET and C# to build robust backend systems, APIs, and server-side logic for web applications.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ux-design"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">SEO Optimization Services</h3>
								<p>Providing SEO optimization services to improve website visibility and search engine rankings, including implementation of SEO best practices and ongoing optimization efforts.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ftco-animate round">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-idea"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Maintenance, Support, and Training</h3>
								<p>Offering maintenance and support services for websites and web applications, including troubleshooting, bug fixing, and regular updates. Additionally, providing WordPress training sessions for clients to empower them to manage their websites effectively.</p>
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
