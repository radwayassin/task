import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EductionPagesRoutingModule } from './eduction-pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EductionPagesComponent } from './containers/eduction-pages/eduction-pages.component';
import { FilterComponent } from './components/courses/filter/filter.component';
import { ListComponent } from './components/courses/list/list.component';


@NgModule({
  declarations: [ NavbarComponent, HeaderComponent, CoursesComponent, EductionPagesComponent, FilterComponent, ListComponent],
  imports: [
    CommonModule,
    EductionPagesRoutingModule
  ]
  
})
export class EductionPagesModule { }
