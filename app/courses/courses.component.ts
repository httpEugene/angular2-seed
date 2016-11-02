import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from '../auto-grow.directive';
import {StarComponent} from '../star/star.component';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>

        <star></star>
        `,
    providers: [CoursesService],
    directives: [
        AutoGrowDirective,
        StarComponent
    ]
})
export class CoursesComponent{
    title = 'Title of courses';
    courses;

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
}
