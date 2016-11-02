import {Component, Input, Output} from 'angular2/core';

@Component({
    selector: 'likes',
    templateUrl: 'app/likes/likes.template.html',
    styles: [`
        .unlike-color {
            color: #ccc;
        }

        .like-color {
            color: deeppink;
        }

        .glyphicon-heart:hover {
            cursor: pointer;
        }
    `]
})
export class LikesComponent {
    @Input() likes = 10;
    @Input() liked = false;

    onClick() {
        (this.liked = !this.liked)
            ? this.likes++
            : this.likes--;
     }
}
