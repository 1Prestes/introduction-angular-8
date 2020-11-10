import { Component, OnInit } from '@angular/core';
import { Course } from './curse';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 500.2,
        code: 'XPS-8796',
        duration: 120,
        rating: 5,
        releaseDate: 'November, 2, 2019',
      },
      {
        id: 1,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 400.2,
        code: 'LKL-1020',
        duration: 80,
        rating: 5,
        releaseDate: 'November, 4, 2019',
      },
    ];
  }
}
