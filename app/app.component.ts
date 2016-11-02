import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {LikesComponent} from './likes/likes.component';
import {VotesCounterComponent} from './votes-counter/votes-counter.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <likes
            [likes]="13"
            [liked]="true">
        </likes>
        <votes-counter
            [votesCount]="7"
            [userVote]="1"
            (vote)="onVote($event)">
        </votes-counter>
    `,
    directives: [
        CoursesComponent,
        AuthorsComponent,
        LikesComponent,
        VotesCounterComponent
    ]
})
export class AppComponent {
    onVote($event) {
        console.log($event);
    }

}
