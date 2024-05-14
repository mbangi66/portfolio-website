import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProjectsComponent } from "./app/projects/projects.component";
import { AboutComponent } from "./app/about/about.component";
import { ContactComponent } from "./app/contact/contact.component";
import { HeaderComponent } from "./app/header/header.component";
import { EducationComponent } from './app/education/education.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ServicesComponent } from './app/services/services.component';
import { FooterComponent } from './app/footer/footer.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
