import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'votes-counter',
    templateUrl: 'app/votes-counter/votes-counter.template.html',
    styles: [`
        .votes-counter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-count {
            font-size: 1.2em;
        }

        .glyphicon-menu-up,
        .glyphicon-menu-down {
            cursor: pointer;
        }

        .up-vote,
        .down-vote {
            color: #bd9d1a;
        }
    `]
})
export class VotesCounterComponent {
    @Input() votesCount = 0;
    @Input() userVote = 0;

    @Output() vote = new EventEmitter();

    onUpVoteClick() {
        if (this.userVote === 1) {
            return;
        }

        this.userVote++;
        this.vote.emit({ userVote: this.userVote });
    }

    onDownVoteClick() {
        if (this.userVote === -1) {
            return;
        }

        this.userVote--;
        this.vote.emit({ userVote: this.userVote });
    }

    isUserVoteUp() {
        return this.userVote === 1;
    }

    isUserVoteDown() {
        return this.userVote === -1;
    }
}
