import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form/subscription-form.component.html',
    directives: [RouterLink]
})
export class SubscriptionFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

    onSubscribe(form){
        console.log(form.value);
    }
}
