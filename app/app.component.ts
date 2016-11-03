import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {LikesComponent} from './likes/likes.component';
import {VotesCounterComponent} from './votes-counter/votes-counter.component';
import {TweetsListComponent} from './tweets-list/tweets-list.component';
import {ZippyComponent} from './zippy/zippy.component';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {ChangePasswordFormComponent} from './change-password-form/change-password-form.component';
import {GitHubProfileComponent} from './github-profile/github-profile.component';

@RouteConfig([
    { path: '/', name: 'Home', component: SubscriptionFormComponent, useAsDefault: true },
    { path: '/votes', name: 'VotesCounter', component: VotesCounterComponent },
    { path: '/likes/:like', name: 'Likes', component: LikesComponent },
    { path: '/tweets', name: 'TweetsList', component: TweetsListComponent },
    { path: '/password', name: 'ChangePasswordForm', component: ChangePasswordFormComponent },
    { path: '/github', name: 'GitHubProfile', component: GitHubProfileComponent },
    { path: '/zippy', name: 'Zippy', component: ZippyComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <ul>
            <li><a [routerLink]="['VotesCounter']">VotesCounter</a></li>
            <li><a [routerLink]="['Likes']">Likes</a></li>
            <li><a [routerLink]="['TweetsList']">TweetsList</a></li>
            <li><a [routerLink]="['ChangePasswordForm']">ChangePasswordForm</a></li>
            <li><a [routerLink]="['GitHubProfile']">GitHubProfile</a></li>
            <li><a [routerLink]="['Zippy']">Zippy</a></li>
        </ul>
        <router-outlet></router-outlet>

        <!--<github-profile></github-profile>
        <change-password-form></change-password-form>

        <subscription-form></subscription-form>

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
        </votes-counter>-->
    `,
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    onVote($event) {
        console.log($event);
    }

}
