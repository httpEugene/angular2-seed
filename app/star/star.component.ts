import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: `
        <i class="glyphicon"
            [class]="isEmpty ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star'"
            (click)="onClick()">
    `
})
export class StarComponent {
    isEmpty = false;

    onClick() {
        this.isEmpty = !this.isEmpty;
    }
}
