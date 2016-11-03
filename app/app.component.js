System.register(['angular2/core', 'angular2/router', './likes/likes.component', './votes-counter/votes-counter.component', './tweets-list/tweets-list.component', './zippy/zippy.component', './subscription-form/subscription-form.component', './change-password-form/change-password-form.component', './github-profile/github-profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, likes_component_1, votes_counter_component_1, tweets_list_component_1, zippy_component_1, subscription_form_component_1, change_password_form_component_1, github_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (likes_component_1_1) {
                likes_component_1 = likes_component_1_1;
            },
            function (votes_counter_component_1_1) {
                votes_counter_component_1 = votes_counter_component_1_1;
            },
            function (tweets_list_component_1_1) {
                tweets_list_component_1 = tweets_list_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (change_password_form_component_1_1) {
                change_password_form_component_1 = change_password_form_component_1_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: subscription_form_component_1.SubscriptionFormComponent, useAsDefault: true },
                        { path: '/votes', name: 'VotesCounter', component: votes_counter_component_1.VotesCounterComponent },
                        { path: '/likes/:like', name: 'Likes', component: likes_component_1.LikesComponent },
                        { path: '/tweets', name: 'TweetsList', component: tweets_list_component_1.TweetsListComponent },
                        { path: '/password', name: 'ChangePasswordForm', component: change_password_form_component_1.ChangePasswordFormComponent },
                        { path: '/github', name: 'GitHubProfile', component: github_profile_component_1.GitHubProfileComponent },
                        { path: '/zippy', name: 'Zippy', component: zippy_component_1.ZippyComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular 2 App</h1>\n        <ul>\n            <li><a [routerLink]=\"['VotesCounter']\">VotesCounter</a></li>\n            <li><a [routerLink]=\"['Likes']\">Likes</a></li>\n            <li><a [routerLink]=\"['TweetsList']\">TweetsList</a></li>\n            <li><a [routerLink]=\"['ChangePasswordForm']\">ChangePasswordForm</a></li>\n            <li><a [routerLink]=\"['GitHubProfile']\">GitHubProfile</a></li>\n            <li><a [routerLink]=\"['Zippy']\">Zippy</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n\n        <!--<github-profile></github-profile>\n        <change-password-form></change-password-form>\n\n        <subscription-form></subscription-form>\n\n        <zippy title=\"Breaking news\">\n            Cras sit amet nibh libero, in gravida nulla.\n            Nulla vel metus scelerisque ante sollicitudin commodo.\n            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n        </zippy>\n\n        <tweets-list></tweets-list>\n        <courses></courses>\n        <authors></authors>\n        <likes\n            [likes]=\"13\"\n            [liked]=\"true\">\n        </likes>\n        <votes-counter\n            [votesCount]=\"7\"\n            [userVote]=\"1\"\n            (vote)=\"onVote($event)\">\n        </votes-counter>-->\n    ",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map