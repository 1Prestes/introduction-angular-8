import { AppPipeModule } from './../shared/pipes/app-pipe.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInforComponent } from './course-info.component';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/components/star/star.module';

@NgModule({
  declarations: [CourseListComponent, CourseInforComponent],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'course/info/:id',
        component: CourseInforComponent,
      },
    ]),
  ],
})
export class CourseModule {}
