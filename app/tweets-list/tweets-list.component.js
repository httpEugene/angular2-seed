System.register(['angular2/core', '../likes/likes.component', './tweets.service'], function(exports_1, context_1) {
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
    var core_1, likes_component_1, tweets_service_1;
    var TweetsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (likes_component_1_1) {
                likes_component_1 = likes_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            TweetsListComponent = (function () {
                function TweetsListComponent(tweetsService) {
                    this.tweets = [];
                    this.tweets = tweetsService.getTweets();
                }
                TweetsListComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets-list',
                        templateUrl: 'app/tweets-list/tweets-list.template.html',
                        providers: [tweets_service_1.TweetsService],
                        directives: [likes_component_1.LikesComponent]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], TweetsListComponent);
                return TweetsListComponent;
            }());
            exports_1("TweetsListComponent", TweetsListComponent);
        }
    }
});
//# sourceMappingURL=tweets-list.component.js.map