import { Component,ViewChild, ElementRef,inject, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ AsyncPipe],
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
    <section class="hero-wraps fullheight">
      <div class="overlays"></div>
      <div class="containers">
        <div class="rows no-gutters">
          <div class="col-lg-8 col-md-6">
          	<div class=" text-centers wrapper">
          		<span class="subhead">Hey! I am</span>
		  				<h1>Mustaqeem Bangi</h1>
              <div class="typewriter-container">
              <h2><span class="">{{ typedText$ | async }}</span></h2>
              </div>
							</div>
            </div>
          </div>
        </div>
      <div class="mouses">
				<a href="#" class="mouse-icons">
					<div class="mouse-wheels"><span class="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </section>
  `,changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
  .mouses {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    z-index: 1;
  }

  .mouse-wheels {
    height: 70px;
    margin: 2px auto 0;
    display: block;
    width: 30px;
    background: transparent;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: 1.6s ease infinite wheel-up-down;
    -moz-animation: 1.6s ease infinite wheel-up-down;
    animation: 1.6s ease infinite wheel-up-down;
    color: #3e64ff;
    font-size: 30px;
  }
  .mouse-icons {
    width: 70px;
    height: 70px;
    border: 1px solid transparent;
    cursor: pointer;
    position: relative;
    text-align: center;
    margin: 0 auto;
    display: block;
  }

  mouse-icons:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: #edf0ff;
    z-index: -1;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .fullheight {
    height: 700px;
  }
  .subhead {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 800;
    color: #3e64ff;
    letter-spacing: 4px;
    text-align: center;
  }
  .rows h1{
    font-size: 60px;
    font-weight: 800;
  }

  .hero-wraps {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-wraps .overlays {
    position: absolute;
    inset: 0;
    content: "";
    opacity: .1;
    width:50%;
    background: #3e64ff;
  }

  @media (min-width: 1200px) {
    .containers {
        max-width: 1140px;
    }
  }

  @media (min-width: 992px) {
      .containers {
          max-width: 960px;
      }
  }
  @media (min-width: 768px) {
      .containers {
          max-width: 720px;
      }
  }
  @media (min-width: 576px) {
      .containers {
          max-width: 540px;
      }
  }
  .containers {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      height:700px;
  }
  .text-centers {
    text-align: center !important;
  }
  
 .rows  h2 {
    font-weight: 800;
  }
  .rows h2 span {
    color: #3e64ff;
    text-decoration: underline;
  }
  .wrapper{
    height:700px;
    text-align: center;
  }
  
  .words {
  overflow: hidden;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3e64ff;
  font-size: 35px;
  font-weight: 700;
}


  .rows{
    display:flex;
    height:200px;
    justify-content: center;
    padding-top: 150px;
  }
        `
})
export class HeaderComponent {
  titles: string[] = [
    'Web Developer',
    'WordPress Developer',
    'Database Administrator',
    'Cloud Solutions',
    'Tech Support'
  ];
  private typewriterService = inject(MessageService);

	@ViewChild('ftcoNav') ftcoNav!: ElementRef;
  
  toggleNavItem(event: Event) {
    const navItems = this.ftcoNav.nativeElement.querySelectorAll('.nav-link');
    navItems.forEach((item: HTMLElement) => {
      item.classList.remove('active');
    });

    const target = event.currentTarget as HTMLElement;
    target.closest('.nav-link')?.classList.add('active');
  }

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));
}
