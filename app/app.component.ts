import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {LikesComponent} from './likes/likes.component';
import {VotesCounterComponent} from './votes-counter/votes-counter.component';
import {TweetsListComponent} from './tweets-list/tweets-list.component';
import {ZippyComponent} from './zippy/zippy.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <zippy title="Breaking news">
            Cras sit amet nibh libero, in gravida nulla.
            Nulla vel metus scelerisque ante sollicitudin commodo.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        </zippy>

        <tweets-list></tweets-list>
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
        ZippyComponent,
        TweetsListComponent,
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
