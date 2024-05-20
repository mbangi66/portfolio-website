import { Component,ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    
    <nav  class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
  <div class="container">
    <a class="navbar-brand" href="index.html"><span>M</span>ustaqeem</a>
    <button  class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="oi oi-menu"></span> Menu
</button>

    <div class="collapse navbar-collapse" id="ftco-nav" #ftcoNav>
    <ul class="navbar-nav nav ml-auto">
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#home-section" class="nav-link"><span>Home</span></a></li>
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#about-section" class="nav-link"><span>About</span></a></li>
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#resume-section" class="nav-link"><span>Resume</span></a></li>
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#services-section" class="nav-link"><span>Services</span></a></li>
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#projects-section" class="nav-link"><span>Projects</span></a></li>
            <li class="nav-item"><a (click)="toggleNavItem($event)" href="#contact-section" class="nav-link"><span>Contact</span></a></li>
          </ul>
    </div>
  </div>
</nav>
    <section class="hero-wrap js-fullheight">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
          	<div class="text text-center">
          		<span class="subheading">Hey! I am</span>
		  				<h1>Mustaqeem Bangi</h1>
			  				<h2>I'm a 
								  <span
								     class="txt-rotate"
								     data-period="2000"
								     data-rotate='["Web Developer", "WordPress Developer", "Database Administrator", "Cloud Solutions", "Tech Support"]'></span>
								</h2>
							</div>
            </div>
          </div>
        </div>
      <div class="mouse">
				<a href="#" class="mouse-icon">
					<div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </section>
  `,
  styles: ``
})
export class HeaderComponent {

	@ViewChild('ftcoNav') ftcoNav!: ElementRef;
  
  toggleNavItem(event: Event) {
    const navItems = this.ftcoNav.nativeElement.querySelectorAll('.nav-link');
    navItems.forEach((item: HTMLElement) => {
      item.classList.remove('active');
    });

    const target = event.currentTarget as HTMLElement;
    target.closest('.nav-link')?.classList.add('active');
  }

}
