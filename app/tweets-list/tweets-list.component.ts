import {Component} from 'angular2/core';
import {LikesComponent} from '../likes/likes.component';
import {TweetsService} from './tweets.service';

@Component({
    selector: 'tweets-list',
    templateUrl: 'app/tweets-list/tweets-list.template.html',
    providers: [TweetsService],
    directives: [LikesComponent]
})
export class TweetsListComponent {
    tweets: any[] = [];

    constructor(tweetsService: TweetsService) {
        this.tweets = tweetsService.getTweets();
    }
}
