import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      ProjectsComponent, 
      AboutComponent, 
      SkillsComponent,
      ServicesComponent,
      FooterComponent,
      ContactComponent, 
      HeaderComponent, 
      EducationComponent, 
      ExperienceComponent]
})
export class AppComponent {
  title = 'portfolio-website';
}
