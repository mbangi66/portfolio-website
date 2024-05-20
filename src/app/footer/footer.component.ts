import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    
    <footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About</h2>
              <p>Discover more about me and my journey in the world of technology.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="https://twitter.com/Mustaqeembangi"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="https://www.linkedin.com/in/mustaqeembangi/"><span class="icon-linkedin"></span></a></li>
                <li class="ftco-animate"><a href="https://www.instagram.com/mustaqeem_bangi/"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#about-section"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#projects-section"><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="#contact-section"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
              <ul class="list-unstyled">
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>Custom Web Development</a></li>
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>WordPress Website Design and Development</a></li>
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>Database Management and Integration</a></li>
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>Backend Development with .NET and C#</a></li>
                <li><a href="#services-section"><span class="icon-long-arrow-right mr-2"></span>SEO Optimization Services</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">Ardiya Kuwait 138st</span></li>
	                <li><a href="tel://+965 410 76750"><span class="icon icon-phone"></span><span class="text">+965 410 76750</span></a></li>
	                <li><a href="mailto:mbangi66@gmail.com"><span class="icon icon-envelope"></span><span class="text">mbangi66&#64;gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>
    
  `,
  styles: ``
})
export class FooterComponent {

}
