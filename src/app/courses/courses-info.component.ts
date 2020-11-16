import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './curse';

@Component({
  templateUrl: './courses-info.component.html',
})
export class CoursesInforComponent implements OnInit {
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(
      +this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
