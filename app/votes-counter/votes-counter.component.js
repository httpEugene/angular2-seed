System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VotesCounterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VotesCounterComponent = (function () {
                function VotesCounterComponent() {
                    this.votesCount = 0;
                    this.userVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VotesCounterComponent.prototype.onUpVoteClick = function () {
                    if (this.userVote === 1) {
                        return;
                    }
                    this.userVote++;
                    this.vote.emit({ userVote: this.userVote });
                };
                VotesCounterComponent.prototype.onDownVoteClick = function () {
                    if (this.userVote === -1) {
                        return;
                    }
                    this.userVote--;
                    this.vote.emit({ userVote: this.userVote });
                };
                VotesCounterComponent.prototype.isUserVoteUp = function () {
                    return this.userVote === 1;
                };
                VotesCounterComponent.prototype.isUserVoteDown = function () {
                    return this.userVote === -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotesCounterComponent.prototype, "votesCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotesCounterComponent.prototype, "userVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VotesCounterComponent.prototype, "vote", void 0);
                VotesCounterComponent = __decorate([
                    core_1.Component({
                        selector: 'votes-counter',
                        templateUrl: 'app/votes-counter/votes-counter.template.html',
                        styles: ["\n        .votes-counter {\n            width: 20px;\n            text-align: center;\n            color: #999;\n        }\n\n        .vote-count {\n            font-size: 1.2em;\n        }\n\n        .glyphicon-menu-up,\n        .glyphicon-menu-down {\n            cursor: pointer;\n        }\n\n        .up-vote,\n        .down-vote {\n            color: #bd9d1a;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VotesCounterComponent);
                return VotesCounterComponent;
            }());
            exports_1("VotesCounterComponent", VotesCounterComponent);
        }
    }
});
//# sourceMappingURL=votes-counter.component.js.map