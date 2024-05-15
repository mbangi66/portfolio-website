import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <section class="ftco-section ftco-project" id="projects-section">
    	<div class="container-fluid px-md-0">
    		<div class="row no-gutters justify-content-center pb-5">
          <div class="col-md-12 heading-section text-center ftco-animate">
          	<h1 class="big big-2">Projects</h1>
            <h2 class="mb-4">Projects</h2>
            <p>Explore my latest projects showcasing innovative solutions and creative developments.</p>
          </div>
        </div>
    		<div class="row no-gutters">
    			<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-1.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="https://hijabo.in/">Hijabo.in</a></h3>
	    					<span>Hijabo provides curated collections that cater to the modern Muslim woman's style needs. With a focus on quality, affordability, and inclusivity, Hijabo aims to empower women to express their individuality while maintaining modesty</span>
	    				</div>
    				</div>
  				</div>
  				<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-2.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="https://serpelevator.com/">serpelevator.com</a></h3>
	    					<span>Serpelevator is your go-to SAAS SEO agency, specializing in boosting organic traffic to your website. Let us optimize your online presence and drive targeted audiences to your business.</span>
	    				</div>
    				</div>
  				</div>

    			<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-3.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="https://eemanagement2024-4mcsi6h23q-uc.a.run.app/">Employees Management System | Dashboard</a></h3>
	    					<span>Employees Management System Dashboard: A comprehensive solution for efficient employee management, streamlining tasks, tracking performance, and optimizing workflows</span>
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-4.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-5.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-4">
    				<div class="project img ftco-animate d-flex justify-content-center align-items-center" style="background-image: url(../assets/images/work-6.jpg);">
    					<div class="overlay"></div>
	    				<div class="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
  `,
  styles: ``
})
export class ProjectsComponent {

}
