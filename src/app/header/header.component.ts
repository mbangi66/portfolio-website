import { Component,ViewChild, ElementRef,inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, map } from 'rxjs';
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
		  				<h1  class="main-title">Mustaqeem Bangi</h1>
              <div class="typewriter-container">
              <h2><span class="txt">{{ typedText$ | async }}</span></h2>
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
  `,
  styles: `
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  titles: string[] = [
    'Web Developer',
    'WordPress Developer',
    'Database Administrator',
    'Cloud Solutions',
    'Tech Support'
  ];
  typedText$!: Observable<string>;

	@ViewChild('ftcoNav') ftcoNav!: ElementRef;
  constructor(private messageService: MessageService) {}
  
  toggleNavItem(event: Event) {
    const navItems = this.ftcoNav.nativeElement.querySelectorAll('.nav-link');
    navItems.forEach((item: HTMLElement) => {
      item.classList.remove('active');
    });

    const target = event.currentTarget as HTMLElement;
    target.closest('.nav-link')?.classList.add('active');
  }
  ngOnInit(): void {
    this.typedText$ = this.messageService.getTypewriterEffect(this.titles);
  }
}
