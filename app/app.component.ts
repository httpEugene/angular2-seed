import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {LikesComponent} from './likes/likes.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <likes
            [likes]="13"
            [liked]="true">
        </likes>
    `,
    directives: [
        CoursesComponent,
        AuthorsComponent,
        LikesComponent
    ]
})
export class AppComponent { }
